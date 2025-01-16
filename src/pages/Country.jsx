// import countryFlag from "../api/countryFlag.json";

import countryData from "../api/countryFlag.json"
export const Country = () => {
    return (
        <main className="country-page">
            <div className="container">
                <h1 className="page-title">Explore Countries</h1>
                <div className="country-grid">
                    {countryData.map((countryFlag) => {
                        const { id, countryName, flag } = countryFlag;
                        return (
                            <div className="country-card" key={id}>
                                <img src={flag} alt={`${countryName} flag`} className="country-flag" />
                                <h2 className="country-name">{countryName}</h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Country;
