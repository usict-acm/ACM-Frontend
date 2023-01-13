import React, { useState, useEffect, Dispatch } from "react";
import "../Assests/CSS/Table.css";
import Title from "../Title";
import ReactPaginate from "react-paginate";
import SweetAlert from "react-bootstrap-sweetalert";
import { doFetch } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";
import BlogRow from "./blogRow";

export type Blog = {
    blogId: number;
    blogTitle: number;
    userName: string;
}

type Props = {
    data: { read(): Blog[]; };
}

const handleDelete = async (id: number, blogs: Blog[], setBlogs: Dispatch<Blog[]>) => {
    const newContacts = [...blogs];
    const index = blogs.findIndex((contact) => contact.blogId === id);
    await doFetch(`/blogs/${blogs[index].blogId}`, "DELETE");
    newContacts.splice(index, 1);
    setBlogs(newContacts);
};

const BlogsTable = function(props: Props) {
    const [blogs, setBlogs] = useState(props.data.read());
    const itemsPerPage = 7;
    const [pageCount, setPageCount] = useState(0);
    const [deleteId, setDeleteId] = useState(0);
    const [showModal, setModal] = useState(false);
    const [postReq, setPostReq] = useState({ read() { } });
    postReq.read();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, []);
    const handlePageClick = (event : any) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClicker = (id : number) => {
        setDeleteId(id);
        setModal(true);
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
                        setPostReq(wrapPromise(handleDelete(deleteId, blogs, setBlogs)));
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
                        <React.Fragment key={blog.blogId}>
                            <BlogRow
                                blog={blog}
                                handleDeleteClicker={handleDeleteClicker}
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
