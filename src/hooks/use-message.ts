
export const useMessage = (param?: Partial<Contact>) => {
  const client = useHttp();
  return useQuery<Contact[]>(["projects", cleanObject(param)], async () =>
    (await client)("projects", { data: param })
  );
};
