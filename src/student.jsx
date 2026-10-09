function Student() { 
    function welcomeStudent() { 
        alert("Welcome to ReactJS!"); 
    } 
    return ( 
    <div> 
        <h1>ReactJS Demo</h1> <p>Learn React by building projects.</p> 
        <button onClick={welcomeStudent}> Click Me </button> 
        </div> 
        ); 
    } 
    export default Student;