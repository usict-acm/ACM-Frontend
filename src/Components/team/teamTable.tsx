import React, { useState, useEffect, Dispatch } from "react";
import "../Assests/CSS/Table.css";
import Title from "../Title";
import ReactPaginate from "react-paginate";
import SweetAlert from "react-bootstrap-sweetalert";
import { doFetch } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";
import { Team } from ".";
import { Store } from "react-notifications-component";
import TeamRow from "./teamRow";

type Props = {
    data: { read(): Team[] };
};

async function handleDelete(
    id: number,
    teams: Team[],
    setLinks: Dispatch<Team[]>
) {
    const newTeams = [...teams];
    const index = teams.findIndex((team) => team.id === id);
    await doFetch(`/team/${teams[index].id}`, "DELETE");
    newTeams.splice(index, 1);
    Store.addNotification({
        title: "Team Member Deleted",
        message: "The Team Member has been deleted successfully",
        type: "danger",
        container: "top-right",
        dismiss: {
            duration: 3000,
            onScreen: true,
        },
    });
    setLinks(newTeams);
}

const TeamTable = function(props: Props) {
    const [teams, setTeams] = useState(props.data.read());
    const itemsPerPage = 7;
    const [pageCount, setPageCount] = useState(0);
    const [deleteId, setDeleteId] = useState(0);
    const [showModal, setModal] = useState(false);
    const [deleteReq, setDeleteReq] = useState({ read() { } });
    deleteReq.read();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(teams.length / itemsPerPage));
    }, []);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % teams.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
        setModal(true);
    };

    return (
        <React.Fragment>
            {showModal && (
                // using this because sweetalert types.ts is not updated
                /* @ts-ignore */
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                        setModal(false);
                        setDeleteReq(
                            wrapPromise(handleDelete(deleteId, teams, setTeams))
                        );
                    }}
                    cancelBtnBsStyle="default"
                    onCancel={() => setModal(false)}
                    focusCancelBtn
                >
                    This row would be deleted!
                </SweetAlert>
            )}
            <Title title="Team"></Title>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Linkedin</th>
                        <th>Github</th>
                        <th>Instagram</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.slice(itemOffset, endOffset).map((team) => (
                        <React.Fragment key={team.id}>
                            <TeamRow team={team} onDelete={handleDeleteClick} />
                        </React.Fragment>
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
        </React.Fragment>
    );
};
export default TeamTable;
