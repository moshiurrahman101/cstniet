import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon, Search, Trash } from "lucide-react";
import { useTheme } from "next-themes";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import deleteStudentRecord from "@/firebase/deleteOperations";
import { useRouter } from "next/navigation";

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [200, 500, 1000];




function StudentsListTable({ studentList, refreshData }) {
  const router = useRouter();
  const customActionButton = (props) => {
    return (
      <div className="flex justify-center items-center gap-3 px-5">
        <Button variant="outline">
          <EyeIcon className="hover:text-green-700" />
        </Button>
        <Button variant="ghost" onClick={()=>EditActionHandle(props.data.id)}>
          <PencilIcon />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              variant="destructive"
            >
              <Trash />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are sure to delete this record?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                record and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={()=>deleteRecord(props.data.id)}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  };
  // CRUD Functionality of record
  const deleteRecord = async (id) => {
    const result = await deleteStudentRecord(id);
    if(result){
      refreshData();
    }
  }

  // Edit actions
  const EditActionHandle = (id) => {
    router.push(`/dashboard/students/edit/${id}`);
  }

  const { theme } = useTheme();
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "studentName", filter: true },
    { field: "studentPhone", filter: true },
    { field: "guardianPhone", filter: true },
    { field: "roll", filter: true },
    { field: "registrationNumber", filter: true },
    { field: "studentId", filter: true },
    { field: "institute", filter: true },
    { field: "studentType", filter: true },
    { field: "session", filter: true },
    { field: "semester", filter: true },
    { field: "bloodGroup", filter: true },
    { field: "address", filter: true },
    { field: "action", cellRenderer: customActionButton },
  ]);

  const [rowData, setRowData] = useState();

  const [searchInput, setSearchInput] = useState();
  
  useEffect(() => {
    studentList ? setRowData(studentList) : "";
  }, [studentList]);

  
  return (
    <div>
      <div className="p-2 ml-7 rounded-lg border shadow-sm flex gap-2 mb-4 max-w-sm">
        <Search />
        <input
          type="text"
          placeholder="Search anything...."
          className="outline-none w-full"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <div
        className={
          theme == "dark" ? "ag-theme-quartz-dark px-7" : "ag-theme-quartz px-7"
        } // applying the Data Grid theme
        style={{ height: 400 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          quickFilterText={searchInput}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
}

export default StudentsListTable;
