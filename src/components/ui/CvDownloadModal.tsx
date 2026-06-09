import { useEffect, useRef, useState } from 'react';
import { getCvFiles } from '@/services/cvService';
import { formatCvName } from '@/utils/formatCvName';
import type { CvFile } from '@/types';

interface Props {
  onClose: () => void;
}

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'empty' }
  | { status: 'ready'; files: CvFile[] };

export default function CvDownloadModal({ onClose }: Props) {
  const [state, setState] = useState<State>({ status: 'loading' });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCvFiles()
      .then(files =>
        setState(files.length === 0 ? { status: 'empty' } : { status: 'ready', files }),
      )
      .catch(err =>
        setState({ status: 'error', message: (err as Error).message }),
      );
  }, []);

  // Close on Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Trap focus inside panel
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

function formatDate(iso?: string) {
  if (!iso) return null;

  return new Date(iso)
    .toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .replace('.', '')
    .toLowerCase();
}
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="cv-modal-title"
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="glass-modal w-full max-w-md rounded-xl p-6 outline-none focus:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
              description
            </span>
            <h2 id="cv-modal-title" className="font-headline font-bold text-lg tracking-tight">
              Selecionar CV
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface/40 hover:text-on-surface transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">close</span>
          </button>
        </div>

        {/* Body */}
        {state.status === 'loading' && (
          <div className="flex flex-col items-center gap-3 py-10 text-on-surface/40">
            <span className="material-symbols-outlined text-3xl animate-spin" aria-hidden="true">
              progress_activity
            </span>
            <p className="font-label text-xs uppercase tracking-widest">Carregando...</p>
          </div>
        )}

        {state.status === 'error' && (
          <div className="flex flex-col items-center gap-3 py-10 text-on-surface/50">
            <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
              error
            </span>
            <p className="font-body text-sm text-center">{state.message}</p>
            <button
              onClick={() => {
                setState({ status: 'loading' });
                getCvFiles()
                  .then(files =>
                    setState(files.length === 0 ? { status: 'empty' } : { status: 'ready', files }),
                  )
                  .catch(err => setState({ status: 'error', message: (err as Error).message }));
              }}
              className="mt-2 font-label text-xs uppercase tracking-widest text-primary hover:underline"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {state.status === 'empty' && (
          <div className="flex flex-col items-center gap-3 py-10 text-on-surface/40">
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">folder_open</span>
            <p className="font-body text-sm">Nenhum CV disponível no momento.</p>
          </div>
        )}

        {state.status === 'ready' && (
          <ul className="space-y-3" role="list">
            {state.files.map(file => (
              <li
                key={file.id}
                className="flex items-center justify-between gap-4 p-4 rounded-lg border border-outline-variant/20 bg-surface-container-high/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary/60 shrink-0 text-base" aria-hidden="true">
                    picture_as_pdf
                  </span>
                  <div className="min-w-0">
                    <p className="font-headline font-bold text-sm truncate">{formatCvName(file.name.toUpperCase())}</p>
                    {file.updatedAt && (
                      <p className="font-label text-[10px] uppercase tracking-wider text-on-surface/40 mt-0.5">
                        Atualizado em {formatDate(file.updatedAt)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={file.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded text-on-surface/40 hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    aria-label={`Visualizar ${formatCvName(file.name)}`}
                    title="Visualizar"
                  >
                    <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
                  </a>
                  <a
                    href={file.downloadUrl}
                    download
                    className="p-2 rounded text-primary hover:bg-primary/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    aria-label={`Baixar ${formatCvName(file.name)}`}
                    title="Baixar"
                  >
                    <span className="material-symbols-outlined text-base" aria-hidden="true">download</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
