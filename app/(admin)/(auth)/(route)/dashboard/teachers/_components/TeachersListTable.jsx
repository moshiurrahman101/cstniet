import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon, Search, Trash } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import { deleteTeacherRecord } from "@/firebase/deleteOperations";
import { useRouter } from "next/navigation";
import TeacherDetails from "./TeacherDetails";

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [200, 500, 1000];

function TeachersListTable({ studentList, refreshData }) {
  const router = useRouter();
  const customActionButton = (props) => {
    return (
      <div className="flex justify-center items-center gap-3 px-5">
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">
              <EyeIcon className="hover:text-green-700" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Teachers Information</DialogTitle>
              <DialogDescription>
                <TeacherDetails id={props.data.id} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Button variant="ghost" onClick={() => EditActionHandle(props.data.id)}>
          <PencilIcon />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="destructive">
              <Trash />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are sure to delete this record?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                record and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => deleteRecord(props.data.id)}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  };
  // CRUD Functionality of record
  const deleteRecord = async (id) => {
    const result = await deleteTeacherRecord(id);
    if (result) {
      refreshData();
    }
  };

  // Edit actions
  const EditActionHandle = (id) => {
    router.push(`/dashboard/teachers/edit/${id}`);
  };

  const { theme } = useTheme();
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "teacherName", filter: true },
    { field: "teacherPhone", filter: true },
    { field: "department", filter: true },
    { field: "designation", filter: true },
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

export default TeachersListTable;
