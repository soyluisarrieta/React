import { useEffect, useState } from 'react';
import { DataTable } from "@/components/ui/data-table";
import { Users, users as userMock } from "@/mocks/users";
import { columns } from "@/users/Columns";

const getData = async (): Promise<Users[]> => userMock

export default function Users () {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getData();
      setUsers(result);
    })()
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  )
}