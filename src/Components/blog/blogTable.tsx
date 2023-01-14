import React, { useState, useEffect, Dispatch } from "react";
import "../Assests/CSS/Table.css";
import Title from "../Title";
import ReactPaginate from "react-paginate";
import SweetAlert from "react-bootstrap-sweetalert";
import { doFetch } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";
import BlogRow from "./blogRow";
import { Blog } from ".";


type Props = {
    data: { read(): Blog[]; };
}

async function handleDelete(id: number, blogs: Blog[], setBlogs: Dispatch<Blog[]>) {
    const newBlogs = [...blogs];
    const index = blogs.findIndex((blog) => blog.id === id);
    await doFetch(`/blog/${blogs[index].id}`, "DELETE");
    newBlogs.splice(index, 1);
    setBlogs(newBlogs);
};

async function handleStatusChange(id: number, blogs: Blog[], setBlogs: Dispatch<Blog[]>, isApprove: boolean) {
    const newBlogs = [...blogs];
    const index = blogs.findIndex((blog) => blog.id === id);
    await doFetch(`/blog/${blogs[index].id}/approve/${isApprove}`, "PATCH");
    newBlogs[index].isDraft = false;
    newBlogs[index].approved = isApprove;
    setBlogs(newBlogs);
}

const BlogsTable = function(props: Props) {
    const [blogs, setBlogs] = useState(props.data.read());
    const itemsPerPage = 7;
    const [pageCount, setPageCount] = useState(0);
    const [deleteId, setDeleteId] = useState(0);
    const [showModal, setModal] = useState(false);
    const [deleteReq, setDeleteReq] = useState({ read() { } });
    deleteReq.read();
    const [postReq, setPostReq] = useState({ read() { } });
    postReq.read();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, []);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClick = (id: number) => {
        setDeleteId(id);
        setModal(true);
    }
    const handleStatusChangeClick = (id: number, isApprove: boolean) => {
        setPostReq(wrapPromise(handleStatusChange(id, blogs, setBlogs, isApprove)));
    }

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
                        setDeleteReq(wrapPromise(handleDelete(deleteId, blogs, setBlogs)));
                    }}
                    cancelBtnBsStyle="default"
                    onCancel={() => setModal(false)}
                    focusCancelBtn
                >
                    This row would be deleted!
                </SweetAlert>
            )}
            <Title title="Blog"></Title>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.slice(itemOffset, endOffset).map((blog) => (
                        <React.Fragment key={blog.id}>
                            <BlogRow
                                blog={blog}
                                handleDeleteClick={handleDeleteClick}
                                handleStatusChangeClick={handleStatusChangeClick}
                            />
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
export default BlogsTable;
