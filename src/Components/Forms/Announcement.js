import React from 'react'
import BottomNav from '../BottomNav'
import Sidebar from '../Sidebar'
import '../Assests/CSS/forms.css'

const Announcement = () => {
    return (
        <div className={window.innerWidth > 750 ? "d-flex flex-row" : "d-flex flex-column"}>
            <div>
                {window.innerWidth > 750 ? <Sidebar /> : <BottomNav />}
            </div>
            <div className={window.innerWidth > 750 ? "container formContainer p-5 d-flex justify-content-center" : "container formContainer py-4 w-100 px-0 d-flex justify-content-center"}>
                <form className={window.innerWidth > 750 ? "w-50" : "w-75"}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <textarea name="" id="" className='form-control' rows="4"></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Date </label>
                        <input type="date" name="" id="" class="form-control"/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Announcement