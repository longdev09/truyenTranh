import { Instance } from "../../core/Instance";
import { MangadexTypes } from "../../types";

// Lấy danh sách manga với kiểu trả về chính xác
export const getMangaList = (
  query: Record<string, any>
): Promise<MangadexTypes.GetMangaResponse> => {
  const path = "/manga";
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};

// Lấy thông tin 1 manga cụ thể
export const getManga = (
  query: MangadexTypes.GetMangaIdRequestOptions,
  mangaId: string
): Promise<MangadexTypes.GetMangaIdResponse> => {
  const path = `/manga/${mangaId}`;
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};

//Lấy danh sách chương của 1 manga
export const getMangaFeed = (
  query: MangadexTypes.GetMangaIdFeedRequestOptions,
  mangaId: string
): Promise<MangadexTypes.GetMangaIdFeedResponse> => {
  const path = `manga/${mangaId}/feed`;
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};

//Lấy thông tin aggregate (chapter theo volume)
export const getMangaAggregate = (
  query: MangadexTypes.GetMangaAggregateRequestOptions,
  mangaId: string
): Promise<MangadexTypes.GetMangaAggregateResponse> => {
  const path = `manga/${mangaId}/aggregate`;
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};
