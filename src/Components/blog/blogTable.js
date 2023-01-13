import React, { useState, useEffect } from "react";
import "../Assests/CSS/Table.css";
import Title from "../Title";
import ReactPaginate from "react-paginate";
import SweetAlert from "react-bootstrap-sweetalert";
import { doFetch } from "../../api/fetchData";
import wrapPromise from "../../api/wrapPromise";
import BlogRow from "./blogRow";

const handleDelete = async (id, blogs, setBlogs) => {
    const newContacts = [...blogs];
    const index = blogs.findIndex((contact) => contact.blogId === id);
    await doFetch(`/blogs/${blogs[index].blogId}`, "DELETE");
    newContacts.splice(index, 1);
    setBlogs(newContacts);
};

const BlogsTable = function(props) {
    const [blogs, setBlogs] = useState(props.data.read());
    const itemsPerPage = 7;
    const [pageCount, setPageCount] = useState(0);
    const [deleteId, setDeleteId] = useState(null);
    const [showModal, setModal] = useState(false);
    const [postReq, setPostReq] = useState({ read() { return null } });
    postReq.read();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    useEffect(() => {
        setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }, []);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    };
    const handleDeleteClicker = (id) => {
        setDeleteId(id);
        setModal(true);
    }


    return (
        <React.Fragment>
            {showModal && (
                < SweetAlert
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
                renderOnZeroPageCount={null}
            />
        </React.Fragment>
    );
};
export default BlogsTable;
