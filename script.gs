const FOLDER_ID = '1xXuSg6EOdxJosulUB7ALCir-hyK-zYLM';

function doGet() {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const files = folder.getFiles();

    const cvs = [];

    while (files.hasNext()) {
      const file = files.next();

      if (file.getMimeType() !== MimeType.PDF) {
        continue;
      }

      const id = file.getId();
      const name = file.getName();

      cvs.push({
        id,
        name,
        viewUrl: `https://drive.google.com/file/d/${id}/view`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${id}`,
        updatedAt: file.getLastUpdated().toISOString(),
      });
    }

    cvs.sort((a, b) => a.name.localeCompare(b.name));

    return ContentService
      .createTextOutput(JSON.stringify(cvs))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        error: true,
        message: error.message,
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}