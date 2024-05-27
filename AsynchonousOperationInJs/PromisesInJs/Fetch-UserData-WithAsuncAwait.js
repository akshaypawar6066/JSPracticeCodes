const fetchUserData = async (pageNo) => {
    console.log("Hitting the Get API to fetch the Data...!!!")
    try {
        const response = await fetch("https://reqres.in/api/users?page=" + pageNo);   //Async step to fetch the data

        if (response.status !== 200) {
            console.error("Not able to fetch the data for the specified page No..!!!")
        }
        else {
            const userData = await response.json()   //Async step to parse the Json response
            console.log("User data is:", userData);

        userData.data.forEach((user)=>
    {
        console.log(user.email)
    })

        }
    }
    catch (error) {
        console.log(`Error while fetching the user data: ${error.message}`)
    }

}


fetchUserData(2)