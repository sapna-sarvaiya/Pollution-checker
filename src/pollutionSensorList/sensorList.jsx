import "./pollution.scss";
import { sensor } from "./pollution";
import Map from "./map";
function SensorList() {
  const sensorList = Object.values(sensor);
  return (
    <>
      <div className="width-100 d-flex mt-30">
        {sensorList?.map((item) => {
          return item.sensors?.map((data) => (
            <div>
              <div className="card">
                <table className="table">
                  <caption className="table-caption">{data.location}</caption>

                  <th>
                    <tr>Sensor Name</tr>
                    <tr>PM25</tr>
                    <tr>co</tr>
                    <tr>Installation Date</tr>
                    <tr>description</tr>
                  </th>
                  <th>
                    <tr className="font-size-18">{data.sensor_name}</tr>
                    <tr>{data.pm25}</tr>
                    <tr>{data.co}</tr>
                    <tr>{data.installation_date}</tr>
                    <tr>{data.description}</tr>
                  </th>
                </table>
              </div>
            </div>
          ));
        })}
      </div>
      <Map mapData={sensorList} />
    </>
  );
}

export default SensorList;
