import React, { Component } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
require('typeface-roboto');

const Wrapper = styled.div`
	  user-select: none;
    display: flex;
    align-items: center;
`;

const Arrows = styled.span`
	color: #a6a8aa;
	font-size: 16px;
	cursor: pointer;
	display: inline-block;
	min-width: 24px;
	margin: 12px;
	&:hover {
		color: ${({color}) => color ? color : "#2196f3"};
	};
	&:active {
		color: #00a9f1;
	};
	&:focus {
		color: #00a9f1;
	}
`;

const ArrowsDisabled = styled.span`
	font-size: 16px;
	color: #e8e8e8;
	cursor: not-allowed;
	display: inline-block;
	min-width: 24px;
	margin: 12px;
`;

const Current = styled.span`
	font-family: ${({font}) => font ? font : "Roboto"};
	font-size: 16px;
	color: ${({color}) => color ? color : "#2196f3"};
	margin: 0 6px;
	display: inline-block;
	min-width: 24px;
	vertical-align: middle;
	height: 24px;
	text-align: center;
`;

const Numbers = styled.span`
	font-family: ${({font}) => font ? font : "Roboto"};
	font-size: 16px;
	color: #717171;
	margin: 0 6px;
	display: inline-block;
	min-width: 24px;
	vertical-align: middle;
	height: 24px;
	text-align: center;
	&:hover{
		color: ${({color}) => color ? color : "#2196f3"};
	}
`;

const NumberSteps = ({ steps, current, callbackNav, font, color }) => (
	Array.apply(null, { length: steps }).map(Number.call, Number).map(step =>
		<span key={step}>
			{(current === step + 1) ? <Current color={color} font={font}> {step + 1} </Current> : <Numbers color={color} font={font} onClick={() => callbackNav(step + 1)}> {step + 1} </Numbers>}
		</span>
	)
);

export class Pagination extends Component {
	state = {
		steps: 0,
		current: 0
	}


 static defaultProps = {
	steps: 6,
	defaultStep: 1,
	callbackPrev: () => console.log('previous page'),
	callbackNext: () => console.log('next page'),
	callbackFirst: () => console.log('first page'),
	callbackLast: () => console.log('last page'),
	callbackNav: (page) => console.log('go to page ', page)
}

	setCurrentPage = page => {
		this.setState({ current: page }, this.props.callbackNav(page))
	}


	componentDidMount = () => {
		this.setState({ steps: this.props.steps, current: this.props.defaultStep })
	}

	goBack = () => {
		this.props.callbackPrev()
		this.setState({ current: this.state.current > 1 ? this.state.current - 1 : 1 })
	}

	goNext = () => {
		this.props.callbackNext()
		this.setState({ current: this.state.current < this.props.steps ? this.state.current + 1 : this.state.current })
	}

	goFirst = () => {
		this.props.callbackFirst()
		this.setState({ current: 1 })
	}

	goLast = () => {
		this.props.callbackLast()
		this.setState({ current: this.props.steps })
	}

	render() {
		const { steps, callbackNav, font, color } = this.props;
		const { current } = this.state;
		return (
			<Wrapper >

				{steps > 6 && (current > 1 ? <Arrows color={color} onClick={this.goFirst}><Icon type="double-left" /></Arrows> : <ArrowsDisabled><Icon type="double-left" /></ArrowsDisabled>)}

				{current > 1 ? <Arrows color={color} onClick={this.goBack}><Icon type="left" /></Arrows> : <ArrowsDisabled><Icon type="left" /></ArrowsDisabled>}

				{steps < 7 ?
					<Numbers color={color} font={font}>
						<NumberSteps font={font} steps={steps} current={current} callbackNav={this.setCurrentPage} />
					</Numbers> :
					<span>

						{current > 1 && <Numbers color={color} font={font} onClick={this.goFirst}>{this.state.steps - this.state.steps + 1}</Numbers>}
						{current > 4 && <Numbers color={color} font={font}>...</Numbers>}
						{current === steps && <Numbers color={color} font={font} onClick={() => this.setCurrentPage(current - 4)}>{current - 4}</Numbers>}
						{(current === steps || current === steps - 1) && <Numbers color={color} font={font} onClick={() => this.setCurrentPage(current - 3)}>{current - 3}</Numbers>}
						{(current > 3 && current !== steps - 3) && <Numbers color={color} font={font} onClick={() => this.setCurrentPage(current - 2)}>{current - 2}</Numbers>}
						{current > 2 && <Numbers color={color} font={font} onClick={() => this.setCurrentPage(current - 1)}>{current - 1}</Numbers>}

						<Current color={color} font={font}>{current}</Current>

						{current < steps && <Numbers color={color} font={font} onClick={() => this.setCurrentPage(current + 1)}> {current + 1} </Numbers>}

						{(current < steps - 1 && current !== 4) && <Numbers color={color} font={font} onClick={() => this.setCurrentPage(current + 2)}>{current + 2}</Numbers>}

						{current < steps - 3 && <Numbers color={color} font={font}>...</Numbers>}
						{current <= steps - 3 && <Numbers color={color} font={font} onClick={this.goLast}>{this.state.steps} </Numbers>}
					</span>
				}
				{current < this.state.steps ? <Arrows color={color} onClick={this.goNext}><Icon type="right" /></Arrows> : <ArrowsDisabled><Icon type="right" /></ArrowsDisabled>}
				{steps > 6 && (current < this.state.steps ? <Arrows color={color} onClick={this.goLast} ><Icon type="double-right" /></Arrows> : <ArrowsDisabled><Icon type="double-right" /></ArrowsDisabled>)}
			</Wrapper>
		);
	}
}

export class SimplePagination extends Component {
	state = {
		steps: 0,
		current: 1
	}

	setCurrentPage = page => {
		this.setState({ current: page }, this.props.callbackNav(page))
	}

	componentDidMount = () => {
		this.setState({ steps: this.props.steps, current: this.props.defaultStep })
	}
	goBack = () => {
		this.props.callbackPrev()
		this.setState({ current: this.state.current > 1 ? this.state.current - 1 : 1 })
	}

	goNext = () => {
		this.props.steps > this.state.current && this.props.callbackNext()
		this.setState({ current: this.state.current < this.props.steps ? this.state.current + 1 : this.state.current })
	}

	render() {
		const { steps, font, color } = this.props;
		const { current } = this.state;
		return (
			<Wrapper>

				{current > 1 ?
					<Arrows
						onClick={this.goBack}>
						<Icon type="left" /></Arrows> :
					<ArrowsDisabled>
						<Icon type="left" />
					</ArrowsDisabled>}
				<span>
					<Current color={color} font={font}>
						{current}
					</Current>
					{<Numbers color={color} font={font}>/</Numbers>}
					{<Numbers color={color} font={font} onClick={() => this.setCurrentPage(steps)}>{steps}</Numbers>}
				</span>
				{current < steps ? <Arrows color={color} onClick={this.goNext}><Icon type="right" /></Arrows> : <ArrowsDisabled><Icon type="right" /></ArrowsDisabled>}
			</Wrapper>
		);
	}
}

SimplePagination.defaultProps = {
	steps: 5,
	defaultStep: 2,
	callbackPrev: () => console.log('previous page'),
	callbackNext: () => console.log('nex page'),
	callbackNav: (page) => {console.log('go to page ', page)}
}
