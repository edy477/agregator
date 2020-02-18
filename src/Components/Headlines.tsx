
import{Content,Container,Card,Image,Columns,Section,Media,Heading}from "react-bulma-components";
import axios from 'axios';
import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";

const Headlines: React.FunctionComponent<{
}> = () =>{



    const [articles,setArticles]= useState<Array<any>>([]);



    useEffect(() => {
        const fetchData = async () => {


            const result = await axios(
                'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&apiKey=db3f918933564fc480f95ec47767f1fc&pageSize=50',
            );
            setArticles(result.data["articles"]);
        };
        fetchData();
    }, []);

    console.log(articles);
    console.dir(articles);
    return(
<Section>


        <Container className="containers">





                {articles.map(items =>


                    <Card key={items.title}>

                     <Card.Image  src={items.urlToImage}/>
                     <Card.Content>
                     <Media>
                         <Media.Item>
                            <Heading  subtitle size={2} renderAs="h5">{items.title}</Heading>
                         </Media.Item>
                     </Media>
                     </Card.Content>
                    </Card>

                )

                }



        </Container>


</Section>

    )
};
export default  Headlines;
