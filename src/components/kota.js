import styled from "styled-components"

const WeatherLogo =styled.img`
    width: 300px;
    margin: 50px auto;
`
const Label = styled.span`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
`;
const Search = styled.form`
    display: flex;
    flex-direction:row;
    color: #fff;
    font-size: 20px;
    margin: 10px auto;
`;
const Kota = (props) =>{
    const {updateCity, fetchWeather}=props;
    return(
        <>
        <WeatherLogo src="/pic/Sun-Cloud.svg"/>
        <Label>Cari Tau Cuaca di Kota-Mu</Label>
        <Search onSubmit={fetchWeather}>
            <div className="input-group">
                <input className="form-control" id="Search" placeholder="Cari Kota . . ." onChange={(e)=>updateCity(e.target.value)}></input>
                <button type={"submit"} className="input-group-text"><i class="bi bi-search"></i></button>
            </div>
        </Search>
        </>
    )

};

export default Kota;