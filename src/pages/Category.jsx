import { useEffect, useState } from "react"


export const Category = () => {
    const [categories, setCategory] = useState([]);
    const [bids, setBids] = useState([]);

    const fetchCategory = async () => {
        try {
            const response = await fetch("https://mbcut2mq36.execute-api.ap-south-1.amazonaws.com/commerce/category/all/Category")
            if (response.ok) {
                const result = await response.json();
                setCategory(result.data.items);
                console.log("Category fetched successfully", result.data.items);
            } else {
                console.error("Error fetching data", response.status);
            }
        } catch (err) {
            console.error("Error fetching data", err);
        }
    }

    const fetchBids = async () => {
        try {
            const response = await fetch("https://mbcut2mq36.execute-api.ap-south-1.amazonaws.com/commerce/bids/all/bids/1707117072086");
            if (response.ok) {
                const result = await response.json();
                setBids(result.data.items);
                console.log(result.data.items);
            } else {
                console.error("Error fetching data", response.status);
            }
        } catch (err) {
            console.error("Error fetching data", err);
        }
    }


    useEffect(() => {
        fetchCategory();
    })

    useEffect(() => {
        fetchBids();
    })
    return (
        <div>
            <div>
                {categories.map((category) => (
                    <div key={category.id}>{category.name}</div>
                ),)}
            </div>

            <div>
                {bids.map((bid) => (
                    <div key={bid.id}> {bid.bidprice}</div>
                ),)}
            </div>
        </div>
    )
}