import { env } from '@/config/env';
import type { CvFile } from '@/types';

let _cache: CvFile[] | null = null;

export async function getCvFiles(): Promise<CvFile[]> {
  if (_cache) return _cache;

  const url = env.cvEndpoint;
  if (!url) throw new Error('VITE_CV_ENDPOINT não configurado');

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Falha ao buscar CVs: ${res.status}`);

  const text = await res.text();

  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error('A resposta do servidor não é JSON válido');
  }

  // Accept both { files: [...] } and a bare array
  let files: CvFile[];
  if (Array.isArray(data)) {
    files = data as CvFile[];
  } else if (
    data !== null &&
    typeof data === 'object' &&
    'files' in data &&
    Array.isArray((data as Record<string, unknown>).files)
  ) {
    files = (data as { files: CvFile[] }).files;
  } else {
    throw new Error(
      `Formato inesperado: ${JSON.stringify(data).slice(0, 120)}`,
    );
  }

  _cache = files;
  return _cache;
}
