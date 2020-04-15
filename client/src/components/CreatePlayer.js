import React, { useState, Fragment, useCallback, useRef } from "react";
import { Redirect } from "react-router-dom";

const CreatePlayer = () => {
  // need to get team-id!!

  const [redirectHome, setRedirectHome] = useState(false);
  const [inputs, setInputs] = useState({
    team_id: "",
    name: "",
    uniform_number: "",
    position: "",
    bats: "",
    throws: ""
  });
  // team_id,
  // name,
  // uniform_number,
  // position,
  // bats,
  // throws

  // const userId = useRef(1);
  // if (currentUserInfo) {
  //   userId.current = currentUserInfo.id;
  //   console.log("userId: ", userId);
  // }
  // const handleSubmit = useCallback(
  //   e => {
  //     e.preventDefault();
  //     addTeam(teamName, curretnUserId).then(response => setRedirectHome(true));
  //     setTeamName("");
  //     addTeamInClient(teamName, curretnUserId);
  //   },
  //   [addTeam, teamName]
  // );

  // const onChange = useCallback(e => {
  //   setTeamName(e.target.value);
  // }, []);

  const { team_id, name, uniform_number, position, bats, throws } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      //[name]: value // name 키를 가진 값을 value 로 설정
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      team_id: "", //team_id - value from teamList.js
      name: "",
      uniform_number: "",
      position: "",
      bats: "",
      throws: ""
    });
  };

  return (
    <Fragment>
      {/* <p>userInfo:{currentUserInfo ? currentUserInfo.first_name : ""}</p> */}

      {redirectHome && <Redirect to="/" />}
      <div className="createPlayer-container">
        {/* <form onSubmit={handleSubmit}> */}
        {/* <form> */}
        <div className="createPlayer-title">Create Team</div>
        <div className="createPlayer-team_id">
          <input
            name="team_id"
            type="hidden"
            value={team_id}
            // onChange={e => setTeamName(e.target.value)}
            onChange={onChange}
          />
        </div>
        <div className="createPlayer-name">
          Name:
          <input
            name="name"
            type="text"
            placeholder="Player name"
            value={name}
            // onChange={e => setTeamName(e.target.value)}
            onChange={onChange}
          />
        </div>
        <div className="createPlayer-uniform_number">
          Uniform number:
          <input
            name="uniform_number"
            type="text"
            placeholder="Uniform_number"
            value={uniform_number}
            // onChange={e => setTeamName(e.target.value)}
            onChange={onChange}
          />
        </div>
        <div className="createPlayer-position">
          Position:
          <input
            name="position"
            type="text"
            placeholder="Player position"
            value={position}
            // onChange={e => setTeamName(e.target.value)}
            onChange={onChange}
          />
        </div>
        <div className="createPlayer-bats">
          Bats:
          <input
            name="bats"
            type="text"
            placeholder="Bats"
            value={bats}
            // onChange={e => setTeamName(e.target.value)}
            onChange={onChange}
          />
        </div>
        <div className="createPlayer-throws">
          Throws:
          <input
            name="throws"
            type="text"
            placeholder="Throws"
            value={throws}
            // onChange={e => setTeamName(e.target.value)}
            onChange={onChange}
          />
        </div>
        <div className="createPlayer-submit">
          <input type="submit" value="Submit" />
        </div>
        <button onClick={onReset}>초기화</button>
        {/* </form> */}
      </div>
      <div>
        <b>값: </b>
        {name} ||
        {uniform_number} ||
        {position} ||
        {bats} ||
        {throws}
      </div>
    </Fragment>
  );
};
export default CreatePlayer;
