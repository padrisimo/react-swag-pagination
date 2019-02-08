import React, { Component } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
require('typeface-roboto');

const Arrows = styled.span`
	color: #a6a8aa;
	font-family: Roboto;
	font-size: 16px;
	cursor: pointer;
	display: inline-block;
	min-width: 24px;
	margin: 12px;
	&:hover {
		color: #0096d6;
	};
	&:active {
		color: #00a9f1;
	};
	&:focus {
		color: #00a9f1;
	}
`;

const ArrowsDisabled = styled.span`
	font-family: Roboto;
	font-size: 16px;
	color: #e8e8e8;
	cursor: not-allowed;
	display: inline-block;
	min-width: 24px;
	margin: 12px;
`;

const Currents = styled.span`
	font-family: Roboto;
	font-size: 16px;
	color: #0a7cc1;
	margin: 0 6px;
	display: inline-block;
	min-width: 24px;
	height: 24px;
	text-align: center;
`;

const Numbers = styled.span`
	font-family: Roboto;
	font-size: 16px;
	color: #717171;
	margin: 0 6px;
	display: inline-block;
	min-width: 24px;
	height: 24px;
	text-align: center;
	cursor: pointer;
	&:hover{
		color: #0a7cc1;
	}
`;

const NumberSteps = ({ total, current, callbackNav }) => (
	Array.apply(null, { length: total }).map(Number.call, Number).map(step =>
		<span key={step}>
			{(current === step + 1) ? <Currents> {step + 1} </Currents> : <Numbers onClick={() => callbackNav(step + 1)}> {step + 1} </Numbers>}
		</span>
	)
);

export class Pagination extends Component {
	state = {
		total: 0,
		current: 0
	}


 static defaultProps = {
	total: 6,
	defaultCurrent: 1,
	callbackPrev: () => console.log('previous page'),
	callbackNext: () => console.log('next page'),
	callbackFirst: () => console.log('first page'),
	callbackLast: () => console.log('last page'),
	callbackNav: (page) => {console.log('go to page ', page)}
}

	setCurrentPage = page => {
		this.setState({ current: page }, this.props.callbackNav(page))
	}


	componentDidMount = () => {
		this.setState({ total: this.props.total, current: this.props.defaultCurrent })
	}

	goBack = () => {
		this.props.callbackPrev()
		this.setState({ current: this.state.current > 1 ? this.state.current - 1 : 1 })
	}

	goNext = () => {
		this.props.callbackNext()
		this.setState({ current: this.state.current < this.props.total ? this.state.current + 1 : this.state.current })
	}

	goFirst = () => {
		this.props.callbackFirst()
		this.setState({ current: 1 })
	}

	goLast = () => {
		this.props.callbackLast()
		this.setState({ current: this.props.total })
	}

	render() {
		const { total, callbackNav } = this.props;
		const { current } = this.state;
		return (
			<div style={{ userSelect: 'none' }}>

				{total > 6 && (current > 1 ? <Arrows onClick={this.goFirst}><Icon type="double-left" /></Arrows> : <ArrowsDisabled><Icon type="double-left" /></ArrowsDisabled>)}

				{current > 1 ? <Arrows onClick={this.goBack}><Icon type="left" /></Arrows> : <ArrowsDisabled><Icon type="left" /></ArrowsDisabled>}

				{total < 7 ?
					<Numbers>
						<NumberSteps total={total} current={current} callbackNav={this.setCurrentPage} />
					</Numbers> :
					<span>

						{current > 1 && <Numbers onClick={this.goFirst}>{this.state.total - this.state.total + 1}</Numbers>}
						{current > 4 && <Numbers>...</Numbers>}
						{current === total && <Numbers onClick={() => this.setCurrentPage(current - 4)}>{current - 4}</Numbers>}
						{(current === total || current === total - 1) && <Numbers onClick={() => this.setCurrentPage(current - 3)}>{current - 3}</Numbers>}
						{(current > 3 && current !== total - 3) && <Numbers onClick={() => this.setCurrentPage(current - 2)}>{current - 2}</Numbers>}
						{current > 2 && <Numbers onClick={() => this.setCurrentPage(current - 1)}>{current - 1}</Numbers>}

						<Currents>{current}</Currents>

						{current < total && <Numbers onClick={() => this.setCurrentPage(current + 1)}> {current + 1} </Numbers>}

						{(current < total - 1 && current !== 4) && <Numbers onClick={() => this.setCurrentPage(current + 2)}>{current + 2}</Numbers>}

						{current < total - 3 && <Numbers>...</Numbers>}
						{current <= total - 3 && <Numbers onClick={this.goLast}>{this.state.total} </Numbers>}
					</span>
				}
				{current < this.state.total ? <Arrows onClick={this.goNext}><Icon type="right" /></Arrows> : <ArrowsDisabled><Icon type="right" /></ArrowsDisabled>}
				{total > 6 && (current < this.state.total ? <Arrows onClick={this.goLast} ><Icon type="double-right" /></Arrows> : <ArrowsDisabled><Icon type="double-right" /></ArrowsDisabled>)}
			</div>
		);
	}
}

export class SimplePagination extends Component {
	state = {
		total: 0,
		current: 1
	}

	setCurrentPage = page => {
		this.setState({ current: page }, this.props.callbackNav(page))
	}

	componentDidMount = () => {
		this.setState({ total: this.props.total, current: this.props.defaultCurrent })
	}
	goBack = () => {
		this.props.callbackPrev()
		this.setState({ current: this.state.current > 1 ? this.state.current - 1 : 1 })
	}

	goNext = () => {r
		this.props.callbackNext()
		this.setState({ current: this.state.current < this.props.total ? this.state.current + 1 : this.state.current })
	}

	render() {
		const { total } = this.props;
		const { current } = this.state;
		return (
			<div style={{ userSelect: 'none' }}>

				{current > 1 ?
					<Arrows
						onClick={this.goBack}>
						<Icon type="left" /></Arrows> :
					<ArrowsDisabled>
						<Icon type="left" />
					</ArrowsDisabled>}
				<span>
					<Currents>
						{current}
					</Currents>
					{<Numbers>/</Numbers>}
					{<Numbers onClick={() => this.setCurrentPage(total)}>{total}</Numbers>}
				</span>
				{current < total ? <Arrows onClick={this.goNext}><Icon type="right" /></Arrows> : <ArrowsDisabled><Icon type="right" /></ArrowsDisabled>}
			</div>
		);
	}
}

SimplePagination.defaultProps = {
	total: 5,
	defaultCurrent: 0,
	callbackPrev: () => console.log('previous page'),
	callbackNext: () => console.log('nex page'),
	callbackNav: (page) => {console.log('go to page ', page)}
}
