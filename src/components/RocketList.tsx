import { useMissionsData } from "../hooks/useMissionsData";
import { FilterParams, Mission } from "../utils/types";

function RocketList({ filterParams }: { filterParams: FilterParams }) {
  const { data: missions, isLoading } = useMissionsData();

  const filteredMissions = prepareData(filterParams)(missions);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {filteredMissions.length > 0 ? (
        <ul>
          {filteredMissions.map((mission: Mission) => (
            <li
              style={{ listStyle: "none", fontWeight: "bold" }}
              key={mission.flight_number}
            >{`#${mission.flight_number} ${mission.mission_name} (${mission?.rocket?.second_stage?.payloads?.length})`}</li>
          ))}
        </ul>
      ) : (
        <div>No data</div>
      )}
    </>
  );
}

const prepareData = (params: FilterParams) => {
  return (missions: Mission[]) => {
    return missions
      ?.filter((mission) => {
        return (
          parseInt(mission.launch_year) === params.year &&
          mission.rocket.second_stage.payloads.some((payload) =>
            payload.customers.includes(params.customerName)
          )
        );
      })
      .sort((a, b) => {
        const dateA = new Date(a.launch_date_utc).getTime();
        const dateB = new Date(b.launch_date_utc).getTime();

        if (dateA > dateB) {
          return -1; // Place A before B
        }
        if (dateA < dateB) {
          return 1; // Place B before A
        }

        const payloadsA = a.rocket.second_stage.payloads.length;
        const payloadsB = b.rocket.second_stage.payloads.length;

        return payloadsB - payloadsA;
      });
  };
};

export default RocketList;
