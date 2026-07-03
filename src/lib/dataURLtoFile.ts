export function dataURLtoFile(dataURL: string, fileName: string): File {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] ?? "image/png";
  const bstr = atob(arr[1]);
  const u8arr = new Uint8Array(bstr.length);
  for (let i = 0; i < bstr.length; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }
  return new File([u8arr], fileName, { type: mime });
}
