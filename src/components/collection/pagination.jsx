import React from 'react'

const pagination = ({ totalPost, postPerPage, setcurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i);

    }


    return (
        <>


            <div className="pagination">
                {
                    pages.map((page, index) => (
                        <button onClick={() => { setcurrentPage(page) }} key={index}>{page}</button>
                    ))
                }
            </div>


        </>



    )
}

export default pagination