
import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    CreateSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateSpecialtyMutation } = specialtiesApi;
