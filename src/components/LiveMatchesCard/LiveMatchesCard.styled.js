import styled from 'styled-components';

export const LiveMatchesCard = styled.div`
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    transition: left 500ms ease-in-out;
`;

export const LiveMatchInfoWrapper = styled.div`
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    transition: left 500ms ease-in-out;
`;

export const LiveMatchScoreInfo = styled.div`
	font-size: 18px;
	color: #fec800;
    margin-top: 16px;
`;

export const LiveMatchTeamInfo = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
	color: #fff;

    div {
        margin-left: 6px;
    }
`;

export const LiveMatchTime = styled.div`
	font-size: 11px;
	color: #999999;
    margin-top: 5px;
`;

export const LiveMatchButton = styled.div`
	width: 102px;
	height: 34px;
	display: block;
	background-color: #3aaa35;
	color: #fff;
	font-size: 13px;
	margin: 10px auto;
    padding: 8px 0 0 0;
    border-radius: 4px;
`;