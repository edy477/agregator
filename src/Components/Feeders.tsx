
import{Content,Container,Card,Image,Columns,Section,Media,Heading,Panel,Tag}from "react-bulma-components";
import axios from 'axios';
import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";

const Feeders: React.FunctionComponent<{
}> = () =>{

    const [sources,setSources]= useState<Array<any>>([]);



    useEffect(() => {
        const fetchData = async () => {


            const result = await axios(
                'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/sources?apiKey=db3f918933564fc480f95ec47767f1fc',
            );
            setSources(result.data["sources"]);
        };
        fetchData();
    }, []);
    return(
        <div>
            <Panel>
                <Panel.Header>
                  Feeders
                </Panel.Header>
                {sources.map(items =>
                <Panel.Block key={items.id} renderAs="a">
                    <a href="#">{items.name}</a>

                </Panel.Block>

                )}
            </Panel>

        </div>
    )
};
export default  Feeders;

