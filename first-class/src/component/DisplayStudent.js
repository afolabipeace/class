const DisplayStudent = ({allStudent}) => {
    return (
        <>
            {allStudent.lenght<1? <h1>There are no student</h1> :
                <div className='col-12'>
                    <h1>All Students</h1>
                    <table className='table'>
                        <tr>
                            <td>S/N</td>
                            <td>Firstname</td>
                            <td>Lastname</td>
                            <td>Email</td>
                            <td>Actions</td>
                        </tr>
                        {
                            allStudent.map((student, index) => (
                                 <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.firstname}</td>
                                    <td>{student.lastname}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button className='btn bg-danger mx-3'>Delete</button>
                                        <button className='btn bg-warning mx-2'>Edit</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </table>
                    </div>
            }
                </>
    )
}

export default DisplayStudent