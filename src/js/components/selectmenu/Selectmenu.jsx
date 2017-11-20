import React from 'react';
import MkCore from 'mk-ui';
import MkSelectmenu from 'mk-ui/selectmenu';

require('../../../styles/selectmenu.scss');


class Selectmenu extends React.Component {

	constructor (props) {

		super(props);
	}

	componentDidMount () {

		MkCore.transitions.enable();

		this.instance = new MkSelectmenu(this.refs.root);
		this.instance.on('change', (value) => {
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		});
	}

	componentWillUnmount () {

		if (this.instance) {
			this.instance.unmount();
			this.instance = null;
		}
	}

	render () {

		return (
			<fieldset ref="root" className="mk-sm-root">
				<select ref="rootSelect" className="mk-sm" aria-label={this.props.label}>
					<option value="1">Recommended</option>
					<option value="2">Popular</option>
					<option value="3">Newest</option>
				</select>
			</fieldset>
		);
	}
}

export default Selectmenu;