import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags:[tagTypes.specialties]
    }),
    getAllSpecialty:build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags:[tagTypes.specialties]
    }),
  }),
  overrideExisting: false,
});

export const { useCreateSpecialtyMutation, useGetAllSpecialtyQuery } = specialtiesApi;
