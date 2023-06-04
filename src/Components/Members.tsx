import React, { useState, Suspense } from "react";
import "./Assests/CSS/Members.css";
import { Link } from "react-router-dom";
import { fetchData } from "../api/fetchData";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ErrorBoundary } from "./errorBoundary";
import { Spinner } from "react-bootstrap";

export type Team = {
  id: number
  image: string
  name: string
  designation: string
  linkedin: string | null
  github: string | null
  instagram: string | null
  year: number
  category: string
  added_on: Date
  techStack: string | null
  dob: Date | null
  active: boolean
  membershipNo:string
  project1Desc:string | null 
  project1Name:string | null 
  project1Image:string | null 
  project2Desc:string | null 
  project2Name:string | null 
  project2Image:string | null 
  project3Desc:string | null 
  project3Name:string | null 
  project3Image:string | null 
  
  }


function MemberTable(props: { data: { read(): Team[] } }) {
    // const data = props.data.read();
    const [data,setData]=useState(props.data.read());
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
    
    const currYear=new Date().getFullYear()-1;
    console.log(data[0].id);
    return (
        <React.Fragment>

        <table className="table-container">
            <thead className="heading-table">
                <tr>
                    <th>SNo</th>
                    <th>Name</th>
                    <th>Membership Number</th>
                    <th>Batch</th>
                </tr>
            </thead>
            
            <tbody className="body-table">
                {/* {data.map((item) => {
                    // return <MemberRow item={item} key={item.id} />;
                    if (item.year==new Date().getFullYear()) {
                        return <MemberRow item={item} key={item.id} />;
                    }
                })} */}
                {data.slice(itemOffset, endOffset).map((event) => (
                        <React.Fragment>
                        {
                            currYear===event.year&&
                        <MemberRow item={event} key={event.id} />
                }
                
                        {/* <MemberRow item={event.year===new Date().getFullYear()?event} key={event.id} /> */}
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
}

function MemberRow(props: { item: Team }) {
    return (
        

        <tr className="table-row" key={props.item.id}>
            <>
                <td data-label="S.No">
                    <Link to={`/User/${props.item.id}`}>
                        <img className="image-person" src= "../upload/teams/default.png" alt="profile-photo" />
                    </Link>
                    {/* {`../${props.item.image}`} */}
                </td>
                <td data-label="Name">{props.item.name}</td>
                <td data-label="Membership Number">{props.item.membershipNo}</td>
                <td data-label="Batch">{props.item.year}</td>
            </>
        </tr>
        

    );
}

export default function Members() {
    
    const [resource, setResource] = useState(fetchData<Team[]>("/team", "GET"));
    return (

        <ErrorBoundary
            onReset={() => setResource(fetchData<Team[]>("/team", "GET"))}
        >
            <Suspense
                fallback={
                    <Spinner
                        animation="border"
                        role="status"
                        className="position-absolute top-50 start-50"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
            >
                <MemberTable data={resource} />
            </Suspense>
        </ErrorBoundary>
        
        
    );
    

}
