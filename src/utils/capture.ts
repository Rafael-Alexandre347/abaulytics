export function validateCapturePhoto(width: number, height: number) {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    throw new Error("Não foi possível validar a resolução da foto.");
  }

  const minLongSide = Math.max(width, height);
  const minShortSide = Math.min(width, height);
  if (minLongSide < 854 || minShortSide < 480) {
    throw new Error("Use uma foto com resolução mínima de 480p e aproximar a câmera da chapa.");
  }
}
