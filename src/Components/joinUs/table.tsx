import { Fragment, useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { JoinUs } from ".";
import Title from "../Title";

type Props = {
    data: { read(): JoinUs[] };
};

function downloadData(data: JoinUs[]) {
    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(data)], { type: 'text/plain' }); //pass data from localStorage API to blob
    element.href = URL.createObjectURL(textFile);
    element.download = "response.json";
    document.body.appendChild(element);
    element.click();
}

export default function JoinUsTable(props: Props) {
    const data = props.data.read();
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, []);
    return (
        <>
            <div className="container">
                <div className="head">
                    <h1 className="head-2">
                        <Badge bg="light" text="dark">
                            Join Us
                        </Badge>
                    </h1>
                </div>
                <Button
                    className="float-end innerbutton"
                    variant="info"
                    onClick={() => {
                        downloadData(data);
                    }}
                >
                    Download Responses
                </Button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>ACM Membership Number</th>
                        <th>Enrollment Number</th>
                        <th>Course</th>
                        <th>Clubs</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(itemOffset, endOffset).map((joinUs) => (
                        <Fragment key={joinUs.id}>
                            <JoinUsRow item={joinUs} />
                        </Fragment>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                containerClassName={"paginationBttns"}
                nextLinkClassName={"nextBttn"}
                previousLinkClassName={"previousBttn"}
                pageCount={pageCount}
                previousLabel="<"
            />
        </>
    );
}

function JoinUsRow(props: { item: JoinUs }) {
    return (
        <tr>
            <td>{props.item.firstname}</td>
            <td>{props.item.lastname}</td>
            <td>{props.item.email}</td>
            <td>{props.item.phone_number}</td>
            <td>{props.item.acm_no}</td>
            <td>{props.item.enrollment_no}</td>
            <td>{props.item.course}</td>
            <td>{props.item.club}</td>
        </tr>
    );
}
