import React from 'react';
import logo from '../../resources/AKAI-LOGO.png';
import styled from 'styled-components';

const Logo = styled.img`
	height: 100%;
`;

const Bar = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
`;

const Title = styled.span`
	font-family: 'Roboto Slab', serif;
	font-size: 1.75em;
`;

const Topbar = props => {
	return (
		<Bar>
			<Logo src={logo} />
			<Title>AKAI Plan Zajęć</Title>

		</Bar>
	);
};

export default Topbar;