import {Contact} from "types/contact";
import {useHttp} from "hooks/use-http";
import {cleanObject} from "utils";
import { useQuery } from "react-query";


export const useContacts = (param?: Partial<Contact>) => {
  const client = useHttp();
  return useQuery<Contact[]>(["projects", cleanObject(param)], async () =>
    await client("projects", { data: param })
  );
};
