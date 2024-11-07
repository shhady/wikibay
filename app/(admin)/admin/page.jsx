
import AddSoftware from '@/components/add-software/AddSoftware';
import AdminComponents from '@/components/adminComponents/AdminComponents'
import { checkRole } from "@/utils/roles";
import { redirect } from 'next/navigation';

export default async function page() {
   
  return (
    <div>
      {/* <AddSoftware /> */}
  <AdminComponents />    </div>
  )
}
