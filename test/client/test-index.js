import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import {Provider} from 'react-redux';

const should = chai.should();

import {KittenContainer} from '../js/components/kitten-container';
import Kitten from "../js/components/kitten";
import store from '../js/store';

describe('Kitten Container component', function() {
    it('Renders directions, a button, and a kitten image place',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<KittenContainer />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('kitten-container');

        const h1 = result.props.children[0];
        h1.type.should.equal("h1");
        const h2 = result.props.children[1];
        h2.type.should.equal("h2");
        const button = result.props.children[2];
        button.type.should.equal("button");
        const kitten = result.props.children[3];
        kitten.type.should.equal(Kitten);

    });
});
describe('Kitten component', function() {
    it('Renders a kitten img',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Kitten />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('kitten');

        const img = result.props.children;
        img.type.should.equal("img");
        
    });
});