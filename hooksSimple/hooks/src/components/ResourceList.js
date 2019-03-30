import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        () => {
            (async resource => {
                const res =  await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            
             setResources(res.data);
            })(resource);
        },
        [resource]
    });

    return resources;
};

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);

    return (
        <div>
            {resources.length}
        </div>
    )
}

export default ResourceList;
