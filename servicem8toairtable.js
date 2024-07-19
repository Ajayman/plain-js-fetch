document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetchButton')
    const pushBtn = document.getElementById('PushButton')
    const fetchDataShow = document.getElementById('FetchDataShow')
    const sendDataShow = document.getElementById('sendDataShow')
    let datatoAirtable;
    fetchBtn.addEventListener('click', async () => {
        const response = await fetch("https://api.servicem8.com/api_1.0/job.json?%24filter=status%20eq%20'Completed'", {
            method: 'GET', headers: {
                accept: 'application/json',
                Authorization: "Basic YW5pbHdhZ2xlMDAxNUBnbWFpbC5jb206TnBsQDI5NTAwQA=="
            }
        })
        .then(response=> response.json())
        datatoAirtable = response;
        fetchDataShow.innerText = JSON.stringify(response);
    }
    )

    pushBtn.addEventListener('click', async()=> {
        const res = await fetch("https://api.airtable.com/v0/appYJzlGOfnTsdIei/Completed%20Task", {
            method: 'POST',
            headers: {
                accept: "application/json",
                Authorization: "Bearer patJZlr6ggpsErJ7n.2c6fcc24fc03b4124ce25fe2e39127a929cdeb7fa2bcaba40097d19612b474c9"
            },
            body: datatoAirtable[0]
        })
    })
})



// async function fetchData() {
//     const options = {
//         method: 'GET', headers: {
//             accept: 'application/json',
//             Authorization: "Basic YW5pbHdhZ2xlMDAxNUBnbWFpbC5jb206TnBsQDI5NTAwQA=="
//         }
//     };

//     fetch('https://api.servicem8.com/api_1.0/job.json', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

//     const getElement = document.getElementById("FetchDataShow").innerText;
//     getElement = await response;
