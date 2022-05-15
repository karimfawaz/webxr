import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from "../styles/RoadMap.module.css"

const RoadMap = () => {
    return (
        <div className={styles.roadmapDiv}>
            <div className={styles.timeline}>


                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'green', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Q3 2022"
                        iconStyle={{ background: 'green', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Thresh Alpha</h3>
                        <h4 className="vertical-timeline-element-subtitle">Web App Release</h4>
                        <p>
                            Users will be able to use Thresh to showcase their owned NFTs by connecting their wallets.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Q2 2023"
                        iconStyle={{ background: 'yellow', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Thresh NFT.3D</h3>
                        <h4 className="vertical-timeline-element-subtitle">3D Gallery Implementation</h4>
                        <p>
                            Users will be able to create a 3D gallery where they can showcase their NFT collection in the most customizable way.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Q4 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Thresh Auction House</h3>
                        <h4 className="vertical-timeline-element-subtitle">Marketplace Launch</h4>
                        <p>
                            Users will now be able to buy and sell NFTs directly on Thresh.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Q1 2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Thr.esh</h3>
                        <h4 className="vertical-timeline-element-subtitle">Fractionalised NFT Transacting</h4>
                        <p>
                            Users will be able to buy, sell, and share NFTs to lower the barrier of entry and adding the community feel to the NFT business.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Q4 2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Thresh Sigma</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thresh Wallet Launch</h4>
                        <p>
                            Users will now be able to use the Thresh Ecosystem to its fullest by having an internal wallet, reducing transaction costs and speed.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'black', color: '#fff' }}
                    />
                </VerticalTimeline>
            </div>
        </div>

    )
}

export default RoadMap