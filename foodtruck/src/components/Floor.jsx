import React, { Component, useState } from "react";
import { Stage, Layer, Rect, Transformer, Image } from "react-konva";
import useImage from 'use-image';
import { Html } from 'react-konva-utils';
import ContentEditable from 'react-contenteditable'
import Footer from "./Footer";

const Foodtruck = () => {
    const [image] = useImage("https://www.linkpicture.com/q/WhatsApp-Image-2022-02-01-at-09.47.36.jpeg");
    return <Image image={image} width={780} height={380} x={150} y={120} />;
};


const Rect1 = () => (
    <Rect
        x={1186}
        y={70}
        width={112}
        height={29}
        fill='#D4E8FF'
        name='rect1'
        stroke='black'
        strokeWidth={0.5}
        draggable={true}
        onMouseEnter={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "move";
        }}
        onMouseLeave={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
        }}
        onDblClick={e => {
            const container = e.target.getStage().container();
            e.target.destroy();
            container.style.cursor = "default";
        }}
        onMouseOver={e => {
            const container = e.target.getStage().container();
        }}

    />
);

const Rect2 = () => (
    <Rect
        x={1186}
        y={150}
        width={112}
        height={29}
        fill='#CEEAAE'
        name='rect2'
        stroke='black'
        strokeWidth={0.5}
        draggable={true}
        onMouseEnter={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "move";
        }}
        onMouseLeave={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
        }}
        onDblClick={e => {
            const container = e.target.getStage().container();
            e.target.destroy();
            container.style.cursor = "default";
        }} />
);

const Rect3 = () => (
    <Rect
        x={1186}
        y={230}
        width={112}
        height={29}
        fill='#F6CA82'
        name='rect3'
        stroke='black'
        strokeWidth={0.5}
        draggable={true}
        onMouseEnter={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "move";
        }}
        onMouseLeave={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
        }}
        onDblClick={e => {
            const container = e.target.getStage().container();
            e.target.destroy();
            container.style.cursor = "default";
        }} />
);

const Rect4 = () => (
    <Rect
        x={1186}
        y={310}
        width={112}
        height={29}
        fill='#E9EDA0'
        name='rect4'
        stroke='black'
        strokeWidth={0.5}
        draggable={true}
        onMouseEnter={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "move";
        }}
        onMouseLeave={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
        }}
        onDblClick={e => {
            const container = e.target.getStage().container();
            e.target.destroy();
            container.style.cursor = "default";
        }} />
);

const Rect5 = () => (
    <Rect
        x={1186}
        y={390}
        width={112}
        height={29}
        fill='#E6C7AB'
        name='rect5'
        stroke='black'
        strokeWidth={0.5}
        draggable={true}
        onMouseEnter={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "move";
        }}
        onMouseLeave={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
        }}
        onDblClick={e => {
            const container = e.target.getStage().container();
            e.target.destroy();
            container.style.cursor = "default";
        }} />
);

const Rect6 = () => (
    <Rect
        x={1186}
        y={470}
        width={112}
        height={29}
        fill='#EFAFAF'
        name='rect6'
        stroke='black'
        strokeWidth={0.5}
        draggable={true}
        onMouseEnter={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "move";
        }}
        onMouseLeave={e => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
        }}
        onDblClick={e => {
            const container = e.target.getStage().container();
            e.target.destroy();
            container.style.cursor = "default";
        }} />
);

class TransformerComponent extends React.Component {
    componentDidMount() {
        this.checkNode();
    }
    componentDidUpdate() {
        this.checkNode();
    }
    checkNode() {
        const stage = this.transformer.getStage();
        const { selectedShapeName } = this.props;
        const selectedNode = stage.findOne("." + selectedShapeName);
        if (selectedNode === this.transformer.node()) {
            return;
        }
        if (selectedNode) {
            this.transformer.attachTo(selectedNode);
        } else {
            this.transformer.detach();
        }
        this.transformer.getLayer().batchDraw();
    }
    render() {
        return (
            <Transformer
                ref={node => {
                    this.transformer = node;
                }}
            />
        );
    }
}

class Floor extends Component {
    state = {
        selectedShapeName: ""
    };
    handleStageClick = e => {
        this.setState({
            selectedShapeName: e.target.name()
        });
    };
    
    render() {
        return (
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onClick={this.handleStageClick}
            >
                <Layer>
                    <Html
                        divProps={{
                            style: {
                                position: 'absolute',
                                marginTop: '580px',
                                width: '1400px',
                            },
                        }}>
                        <ul class="components">
                            <li>
                                <a href="#" contentEditable={true} class="fridge">
                                    <h4 style={{ fontWeight: "bold" }}>Refrigeration</h4>
                                    <p></p>
                                </a>
                            </li>
                            <li>
                                <a href="#" contentEditable={true} class="foodprep">
                                    <h4 style={{ fontWeight: "bold" }}>Food Prep</h4>
                                    <p></p>
                                </a>
                            </li>
                            <li>
                                <a href="#" contentEditable={true} class="sink">
                                    <h4 style={{ fontWeight: "bold" }}>Sink</h4>
                                    <p></p>
                                </a>
                            </li>
                            <li>
                                <a href="#" contentEditable={true} class="heaters">
                                    <h4 style={{ fontWeight: "bold" }}>Water Heaters</h4>
                                    <p></p>
                                </a>
                            </li>
                            <li>
                                <a href="#" contentEditable={true} class="cooking">
                                    <h4 style={{ fontWeight: "bold" }}>Cooking</h4>
                                    <p></p>
                                </a>
                            </li>
                            <li>
                                <a href="#" contentEditable={true} class="storage">
                                    <h4 style={{ fontWeight: "bold" }}>Storage</h4>
                                    <p></p>
                                </a>
                            </li>
                        </ul>
                        <Footer/>
                    </Html>
                    <Foodtruck />
                    <Rect1 />
                    <Rect2 />
                    <Rect3 />
                    <Rect4 />
                    <Rect5 />
                    <Rect6 />
                    <TransformerComponent
                        selectedShapeName={this.state.selectedShapeName}
                    />
                </Layer>
            </Stage>
        );
    }
}

export default Floor;