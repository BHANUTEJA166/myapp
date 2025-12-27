import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useCallApi = (api) => {
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get('/data/database.json')
        .then((res) => setData(res.data[api]))
        .catch((err) => console.log(err));
    }, [api])

    return data
}

export default useCallApi













// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const useCallApi = (api) => {
//     const [data, setData] = useState("");
//     useEffect(() => {
//         axios.get(`http://localhost:5000/${api}`)
//         .then((res) => setData(res.data))
//         .catch((err) => console.log(err));
//     })
//   return data
// }

// export default useCallApi