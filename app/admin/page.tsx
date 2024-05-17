import { Table } from "./component/Table";
import { ReportWrapperStyle } from "./style.css";


export default function Page() {

  return (
    <div className={ReportWrapperStyle}>
      <Table data={[]}></Table>
    </div>
  );
}
