<script>
	import Accordion from "../components/Accordion.svelte";
	import AccordionGroup from "../components/AccordionGroup.svelte";
	import Avatar from "../components/Avatar.svelte";
	import Background from "../components/Background.svelte";
	import Button from "../components/Button.svelte";
	import Header from "../components/Header.svelte";
	import Hyperlink from "../components/Hyperlink.svelte";
	import Icon from "../components/Icon.svelte";
	import Table from "../components/Table.svelte";
	import Radio from "../components/Radio.svelte";
	import Skeleton from "../components/Skeleton.svelte";
	import BackToTop from "../components/BackToTop.svelte";
	import Badge from "../components/Badge.svelte";
	import Banner from "../components/Banner.svelte";
	import AlaskaLogo from "../components/AlaskaLogo.svelte";
	import Input from "../components/Input.svelte";
	import Loader from "../components/Loader.svelte";
	import Lockup from "../components/Lockup.svelte";
	import Menu from "../components/Menu.svelte";
	import Nav from "../components/Nav.svelte";
	import Pane from "../components/Pane.svelte";
	import Popover from "../components/Popover.svelte";
	import Card from "../components/Card.svelte";
	import Carousel from "../components/Carousel.svelte";
	import CheckboxGroup from "../components/CheckboxGroup.svelte";
	import Checkbox from "../components/Checkbox.svelte";
	import Select from "../components/Select.svelte";
	import Sidenav from "../components/Sidenav.svelte";
	import Dropdown from "../components/Dropdown.svelte";
	import Flightline from "../components/Flightline.svelte";
	import Flight from "../components/Flight.svelte";
	import Combobox from "../components/Combobox.svelte";

	const basicTableData = {
		headers: JSON.stringify(["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),
		data: JSON.stringify([
			{"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
			{"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
			{"": "Team meeting", "Wednesday": "10:00am" },
			{"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
		])
	};

	const flightData = {
		stopOneStep: JSON.stringify([{ "isStopover": true, "arrivalStation": "CDB"}]),
		stopOver: JSON.stringify([{ "isStopover": true, "arrivalStation": "WRG"}, 
					{ "isStopover": true, "arrivalStation": "PSG"}, 
					{ "isStopover": true, "arrivalStation": "JNU"}]),
		layOver: JSON.stringify([{ "isStopover": false, "arrivalStation": "ORD", "duration":"3h 10m" }])
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
	<section class="component-container">
		<h2>Auro Button</h2>
		<h4 id="auro-button-basic">Basic</h4>
		<div class="exampleWrapper">
			<Button>
				Primary
			</Button>
			<Button variant="secondary">
				Secondary
			</Button>
			<Button variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-ondark">Ondark</h4>
		<div class="exampleWrapper--ondark">
			<Button onDark>
				Primary
			</Button>
			<Button onDark variant="secondary">
				Secondary
			</Button>
			<Button onDark variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-disabled">Disabled</h4>
		<div class="exampleWrapper">
			<Button disabled>
				Primary
			</Button>
			<Button disabled variant="secondary">
				Secondary
			</Button>
			<Button disabled variant="tertiary">
				Tertiary
			</Button>
		</div>

		<div class="exampleWrapper--ondark">
			<Button disabled onDark>
				Primary
			</Button>
			<Button disabled onDark variant="secondary">
				Secondary
			</Button>
			<Button disabled onDark variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-slim">Slim Style</h4>
		<div class="exampleWrapper">
			<Button slim>
				Primary
			</Button>
			<Button slim variant="secondary">
				Secondary
			</Button>
			<Button slim variant="tertiary">
				Tertiary
			</Button>
		</div>

		<h4 id="auro-button-slim">Icon Support</h4>
		<div class="exampleWrapper">
			<Button ariaLabel="wifi">
				Activate Wifi
				<Icon customColor category="in-flight" name="wifi"></Icon>
			</Button>
			<Button variant="secondary" ariaLabel="arrow-left">
				Previous action
				<Icon customColor category="interface" name="arrow-left"></Icon>
			</Button>
			<Button variant="tertiary" ariaLabel="heart-filled">
				Love this ...
				<Icon customColor category="interface" name="heart-filled"></Icon>
			</Button>
			
		</div>
	</section>

	<section class="component-container">
		<h2 id="auro-hyperlink">Auro Hyperlink</h2>
		<div class="exampleWrapper">
			This is
			<Hyperlink href="https://www.alaskaair.com">
				This is Auro Hyperlink
			</Hyperlink>.
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Accordion</h2>
		<h4 id="auro-accordion-basic">Basic</h4>
		<div class="exampleWrapper">
			<Accordion>
				<span slot="trigger">This is Auro Accordion</span>
				<span>This is Auro Accordion content</span>
			</Accordion>
		</div>
	
		<h4 id="auro-accordion-emphasis">Emphasis</h4>
		<div class="exampleWrapper">
			<AccordionGroup emphasis>
				{#each Array(3) as _, index}
					<Accordion key={index}>
						<span slot="trigger">Trigger</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
						<p>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</Accordion>
				{/each}
			</AccordionGroup>
		</div>
	</section>

	<section class="component-container">
		<h2 id="auro-avatar">Auro Avatar</h2>
		<div class="exampleWrapper">
			<Avatar></Avatar>
		</div>
	</section>

	<section class="component-container">
		<h2 id="auro-background">Auro Background</h2>
		<div class="exampleWrapper">
			<Background bg="url('https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2') center center/cover no-repeat">
				<div
					style="
						color: var(--ds-color-text-primary-default);
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
					"
				>
					<Header level="2" display="600">View all destinations</Header>
					<Hyperlink cta href="#">See where we fly</Hyperlink>
				</div>
			</Background>
		</div>
	</section>

	<section class="component-container">
		<h2 id="auro-backtotop">Auro BackToTop</h2>
		<div class="exampleWrapper">
			<BackToTop
				ariaLabel="arrow-up"
				rounded>
				Back to top
				<Icon customColor category="interface" name="arrow-up" part="icon"></Icon>
			</BackToTop>
			<BackToTop
				ariaLabel="arrow-up"
				disabled
				rounded>
				Back to top
				<Icon customColor category="interface" name="arrow-up" part="icon"></Icon>
			</BackToTop>
			<BackToTop
				ariaLabel="arrow-up"
				secondary
				rounded>
				Back to top
				<Icon customColor category="interface" name="arrow-up" part="icon"></Icon>
			</BackToTop>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Badge</h2>
		<h4 id="auro-badge-basic">Basic</h4>
		<div class="exampleWrapper">
			<Badge>Nonstop</Badge>
		</div>

		<h4 id="auro-badge-ondark">On Dark</h4>
		<div class="exampleWrapper--ondark">
			<Badge ondark>Nonstop</Badge>
		</div>

		<h4 id="auro-badge-colored">Colored</h4>
		<div class="exampleWrapper">
			<Badge space error>Nonstop</Badge>
			<Badge space success>1 stop</Badge>
			<Badge space advisory>2+ stop</Badge>
		</div>

		<h4 id="auro-badge-colored-ondark">Colored On Dark</h4>
		<div class="exampleWrapper--ondark">
			<Badge ondark space error>Nonstop</Badge>
			<Badge ondark space success>1 stop</Badge>
			<Badge ondark space advisory>2+ stop</Badge>
		</div>

		<h4 id="auro-badge-pill">Pill</h4>
		<div class="exampleWrapper">
			<Badge space pill>12</Badge>
			<Badge space error pill>Danger</Badge>
			<Badge space success pill>Flight 167</Badge>
			<Badge space advisory pill>99</Badge>
		</div>

		<h4 id="auro-badge-brand">Brand</h4>
		<div class="exampleWrapper">
			<Badge pill emerald><b>one</b>world Emerald</Badge>
			<Badge pill sapphire><b>one</b>world Sapphire</Badge>
			<Badge pill ruby><b>one</b>world Ruby</Badge>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Banner</h2>
		<h4 id="auro-banner-billboard">Billboard</h4>
		<div class="exampleWrapper">
			<Banner billboard>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/430/1124/800" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/430/1124/1000" media="(min-width: 768px)">
					<source srcset="https://picsum.photos/id/430/736/750" media="(min-width: 736px)">
					<source srcset="https://picsum.photos/id/430/736/1400" media="(min-width: 375px)">
					<source srcset="https://picsum.photos/id/430/320/700" media="(min-width: 320px)">
					<img src="https://picsum.photos/id/430/225/550" alt="" />
				</picture>
				<img
					slot="contentImage"
					src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/oneworld-travel-bright-Horizontal-300.png"
					alt="Random insert"/>
				<p slot="description">
					We’ll explain any additional costs before you book your car rental. More details on what’s included? Just check the Ts&Cs of any car.
				</p>
				<Hyperlink
					cta
					secondary
					slot="action"
					href="/"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-billboard-ondark-alignright">Billboard / slim /alignRight / onDark</h4>
		<div class="exampleWrapper--ondark">
			<Banner billboard slim alignRight ondark>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/324/1124/800" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/324/1124/1000" media="(min-width: 768px)">
					<source srcset="https://picsum.photos/id/324/736/750" media="(min-width: 736px)">
					<source srcset="https://picsum.photos/id/324/736/1400" media="(min-width: 375px)">
					<source srcset="https://picsum.photos/id/324/320/700" media="(min-width: 320px)">
					<img src="https://picsum.photos/id/324/225/550" alt="" />
				</picture>
				<AlaskaLogo official ondark style="width: 192px" slot="contentImage"></AlaskaLogo>
				<p slot="description">
					<span style="max-width:320px; margin-left:auto; display:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					ondark
					href="/"
					slot="action"
					target="_blank">
					Learn more
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-billboard-ondark-alignleft">Billboard / slim / alignLeft / onDark</h4>
		<div class="exampleWrapper--ondark">
			<Banner billboard slim alignLeft ondark>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/42/1124/800" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/42/1124/1000" media="(min-width: 768px)">
					<source srcset="https://picsum.photos/id/42/736/750" media="(min-width: 736px)">
					<source srcset="https://picsum.photos/id/42/736/1400" media="(min-width: 375px)">
					<source srcset="https://picsum.photos/id/42/320/700" media="(min-width: 320px)">
					<img src="https://picsum.photos/id/42/225/550" alt="" />
				</picture>
				<span slot="title">Beverages and cocktails</span>
				<p slot="description">
					<span style="max-width: 360px;display: block;">Enjoy soft drinks, fresh Starbucks® coffee – including lattes and cappuccinos, and Teavana® tea while you relax. Or try our famous Bloody Mary.</span>
				</p>
				<Hyperlink
					cta
					secondary
					ondark
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
			
		</div>

		<h4 id="auro-banner-hero">Hero</h4>
		<div class="exampleWrapper">
			<Banner hero>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/369/2048/2000" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/369/736/1400" media="(min-width:660px)">
					<img src="https://picsum.photos/id/369/660/420" alt="">
				</picture>
				<span slot="prefix">Duis aute irure dolor</span>
				<span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
				<p slot="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					secondary
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-iconic">Iconic</h4>
		<div class="exampleWrapper">
			<Banner iconic iconbg="var(--auro-color-brand-neutral-400)">
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/452/2800/2000.jpg" media="(min-width: 1054px)">
					<source srcset="https://picsum.photos/id/452/1500/2000" media="(min-width:660px)">
					<img src="https://picsum.photos/id/452/2800/2000.jpg" alt="">
				</picture>
				<span slot="icon">
					<Icon category="social" name="instagram" customSize customColor style="color: var(--ds-color-base-white); width: 5rem"></Icon>
				</span>
				<span slot="title">
					<Header level="2" display="800" margin="both" size="none">Lorem ipsum title</Header>
					<Header level="3" display="300" margin="top" size="none">You can add multiple auro-header's here</Header>
				</span>
				<p slot="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, quod aperiam a aut fuga qui eos reprehenderit facilis vero.
				</p>
			</Banner>
		</div>

		<h4 id="auro-banner-marquee">Marquee</h4>
		<div class="exampleWrapper">
			<Banner marquee>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/154/2048/2000" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/154/736/1400" media="(min-width:660px)">
					<img src="https://picsum.photos/id/154/660/420" alt="">
				</picture>
				<span slot="prefix">Duis aute irure dolor</span>
				<span slot="title">Duis aute irure dolor.<br>Excepteur sint occaecat.</span>
				<p slot="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					secondary
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-marquee-solid">Marquee / solid</h4>
		<div class="exampleWrapper">
			<Banner marquee solid>
				<picture slot="displayImage">
					<source srcset="https://picsum.photos/id/1015/1048/2000" media="(min-width: 1024px)">
					<source srcset="https://picsum.photos/id/1015/736/1400" media="(min-width:660px)">
					<img src="https://picsum.photos/id/1015/660/660" alt="">
				</picture>
				<AlaskaLogo official ondark style="width: 192px" slot="contentImage"></AlaskaLogo>
				<p slot="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Hyperlink
					cta
					ondark
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>

		<h4 id="auro-banner-rounded-border">RoundedBorder</h4>
		<div class="exampleWrapper">
			<Banner roundedBorder alignLeft>
				<img src="https://sitecore-prod-cd-westcentralus.azurewebsites.net/-/media/Images/photos-infographics/credit-card/visa_signature" alt="" slot="contentImage" />
				<span slot="prefix">Prefix - Limited Time</span>
				<span slot="title">Title - Irure dolor.</span>
				<p slot="description">
					Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div slot="disclaimer">
					* Disclaimer - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
				<Hyperlink
					cta
					secondary
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
			</Banner>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Card</h2>
		<h4 id="auro-card-basic">Basic</h4>
		<div class="exampleWrapper">
			<Card>
				<span slot="title">
					Pri dicat graece abhorreant
				</span>
				<img
					slot="image"
					src="https://picsum.photos/304?random=0"
					alt="Random insert 0"/>
				<p slot="description">
					Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
				</p>
				<Hyperlink
					nav
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
				<p slot="disclaimer">
					* Errem tempor eligendi cu eos
				</p>
			</Card>
		</div>

		<h4 id="auro-card-align-left">Align Left</h4>
		<div class="exampleWrapper">
			<Card alignLeft>
				<span slot="title">
					Pri dicat graece abhorreant
				</span>
				<img
					slot="image"
					src="https://picsum.photos/304?random=1"
					alt="Random insert 0"/>
				<p slot="description">
					Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
				</p>
				<Hyperlink
					nav
					href="/"
					slot="action"
					target="_blank">
					More info
				</Hyperlink>
				<p slot="disclaimer">
					* Errem tempor eligendi cu eos
				</p>
			</Card>
		</div>

		<h4 id="auro-card-multi-option-layout">Multi-option layout</h4>
		<div class="exampleWrapper">
			<div style="display: flex;justify-content: space-between;">
				<Card>
					<span slot="title">
						Pri dicat graece abhorreant
					</span>
					<img
						slot="image"
						src="https://picsum.photos/304?random=3"
						alt="Random insert 0"/>
					<p slot="description">
						Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
					</p>
					<Hyperlink
						nav
						href="/"
						slot="action"
						target="_blank">
						More info
					</Hyperlink>
					<p slot="disclaimer">
						* Errem tempor eligendi cu eos
					</p>
				</Card>
				
				<Card>
					<span slot="title">
						Pri dicat graece abhorreant
					</span>
					<img
						slot="image"
						src="https://picsum.photos/304?random=4"
						alt="Random insert 0"/>
					<p slot="description">
						Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
					</p>
					<Hyperlink
						nav
						href="/"
						slot="action"
						target="_blank">
						More info
					</Hyperlink>
					<p slot="disclaimer">
						* Errem tempor eligendi cu eos
					</p>
				</Card>
				
				<Card>
					<span slot="title">
						Pri dicat graece abhorreant
					</span>
					<img
						slot="image"
						src="https://picsum.photos/304?random=5"
						alt="Random insert 0"/>
					<p slot="description">
						Ei est detracto fabellas convenire, vivendo accusata intellegebat ex mei. Pri dicat graece abhorreant ut, sea ei vidit omnes, errem tempor eligendi cu eos.
					</p>
					<Hyperlink
						nav
						href="/"
						slot="action"
						target="_blank">
						More info
					</Hyperlink>
					<p slot="disclaimer">
						* Errem tempor eligendi cu eos
					</p>
				</Card>
			</div>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Carousel</h2>
		<h4 id="auro-carousel-basic">Basic</h4>
		<div class="exampleWrapper">
			<Carousel>
				<Pane date="2020-10-10" price="$435"></Pane>
				<Pane date="2020-10-11" price="$435"></Pane>
				<Pane date="2020-10-12" price="$435"></Pane>
				<Pane date="2020-10-13" selected price="$666"></Pane>
				<Pane date="2020-10-14" price="$435" disabled></Pane>
				<Pane date="2020-10-15" price="$435"></Pane>
				<Pane date="2020-10-16" price="$435"></Pane>
				<Pane date="2020-10-17" price="$435"></Pane>
				<Pane date="2020-10-18" price="$435"></Pane>
				<Pane date="2020-10-19" price="$435"></Pane>
				<Pane date="2020-10-20" price="$435"></Pane>
				<Pane date="2020-10-21" price="$435"></Pane>
				<Pane date="2020-10-22" price="$435"></Pane>
				<Pane date="2020-10-23" price="$435"></Pane>
				<Pane date="2020-10-24" price="$435"></Pane>
			</Carousel>
		</div>

		<h4 id="auro-carousel-image-custom">Carousel of images w/custom scroll distance</h4>
		<div class="exampleWrapper">
			<Carousel label="Images" scrolldistance="600">
				<img src="https://picsum.photos/200?random=0" alt="Random insert 0">
				<img src="https://picsum.photos/200?random=1" alt="Random insert 1">
				<img src="https://picsum.photos/200?random=2" alt="Random insert 2">
				<img src="https://picsum.photos/200?random=3" alt="Random insert 3">
				<img src="https://picsum.photos/200?random=4" alt="Random insert 4">
				<img src="https://picsum.photos/200?random=5" alt="Random insert 5">
				<img src="https://picsum.photos/200?random=6" alt="Random insert 6">
				<img src="https://picsum.photos/200?random=7" alt="Random insert 7">
				<img src="https://picsum.photos/200?random=8" alt="Random insert 8">
				<img src="https://picsum.photos/200?random=9" alt="Random insert 9">
				<img src="https://picsum.photos/200?random=10" alt="Random insert 10">
				<img src="https://picsum.photos/200?random=11" alt="Random insert 11">
				<img src="https://picsum.photos/200?random=12" alt="Random insert 12">
				<img src="https://picsum.photos/200?random=13" alt="Random insert 13">
				<img src="https://picsum.photos/200?random=14" alt="Random insert 14">
				<img src="https://picsum.photos/200?random=15" alt="Random insert 15">
				<img src="https://picsum.photos/200?random=16" alt="Random insert 16">
				<img src="https://picsum.photos/200?random=17" alt="Random insert 17">
				<img src="https://picsum.photos/200?random=18" alt="Random insert 18">
				<img src="https://picsum.photos/200?random=19" alt="Random insert 19">
				<img src="https://picsum.photos/200?random=20" alt="Random insert 20">
				<img src="https://picsum.photos/200?random=21" alt="Random insert 21">
				<img src="https://picsum.photos/200?random=22" alt="Random insert 22">
				<img src="https://picsum.photos/200?random=23" alt="Random insert 23">
				<img src="https://picsum.photos/200?random=24" alt="Random insert 24">
				<img src="https://picsum.photos/200?random=25" alt="Random insert 25">
				<img src="https://picsum.photos/200?random=26" alt="Random insert 26">
				<img src="https://picsum.photos/200?random=27" alt="Random insert 27">
				<img src="https://picsum.photos/200?random=28" alt="Random insert 28">
				<img src="https://picsum.photos/200?random=29" alt="Random insert 29">
				<img src="https://picsum.photos/200?random=30" alt="Random insert 30">
				<img src="https://picsum.photos/200?random=31" alt="Random insert 31">
				<img src="https://picsum.photos/200?random=32" alt="Random insert 32">
				<img src="https://picsum.photos/200?random=33" alt="Random insert 33">
				<img src="https://picsum.photos/200?random=34" alt="Random insert 34">
				<img src="https://picsum.photos/200?random=35" alt="Random insert 35">
				<img src="https://picsum.photos/200?random=36" alt="Random insert 36">
				<img src="https://picsum.photos/200?random=37" alt="Random insert 37">
				<img src="https://picsum.photos/200?random=38" alt="Random insert 38">
				<img src="https://picsum.photos/200?random=39" alt="Random insert 39">
				<img src="https://picsum.photos/200?random=40" alt="Random insert 40">
				<img src="https://picsum.photos/200?random=41" alt="Random insert 41">
				<img src="https://picsum.photos/200?random=42" alt="Random insert 42">
				<img src="https://picsum.photos/200?random=43" alt="Random insert 43">
				<img src="https://picsum.photos/200?random=44" alt="Random insert 44">
				<img src="https://picsum.photos/200?random=45" alt="Random insert 45">
				<img src="https://picsum.photos/200?random=46" alt="Random insert 46">
				<img src="https://picsum.photos/200?random=47" alt="Random insert 47">
				<img src="https://picsum.photos/200?random=48" alt="Random insert 48">
				<img src="https://picsum.photos/200?random=49" alt="Random insert 49">
				<img src="https://picsum.photos/200?random=50" alt="Random insert 50">
				<img src="https://picsum.photos/200?random=51" alt="Random insert 51">
				<img src="https://picsum.photos/200?random=52" alt="Random insert 52">
				<img src="https://picsum.photos/200?random=53" alt="Random insert 53">
				<img src="https://picsum.photos/200?random=54" alt="Random insert 54">
				<img src="https://picsum.photos/200?random=55" alt="Random insert 55">
				<img src="https://picsum.photos/200?random=56" alt="Random insert 56">
				<img src="https://picsum.photos/200?random=57" alt="Random insert 57">
				<img src="https://picsum.photos/200?random=58" alt="Random insert 58">
				<img src="https://picsum.photos/200?random=59" alt="Random insert 59">
				<img src="https://picsum.photos/200?random=60" alt="Random insert 60">
				<img src="https://picsum.photos/200?random=61" alt="Random insert 61">
				<img src="https://picsum.photos/200?random=62" alt="Random insert 62">
				<img src="https://picsum.photos/200?random=63" alt="Random insert 63">
				<img src="https://picsum.photos/200?random=64" alt="Random insert 64">
				<img src="https://picsum.photos/200?random=65" alt="Random insert 65">
				<img src="https://picsum.photos/200?random=66" alt="Random insert 66">
				<img src="https://picsum.photos/200?random=67" alt="Random insert 67">
				<img src="https://picsum.photos/200?random=68" alt="Random insert 68">
				<img src="https://picsum.photos/200?random=69" alt="Random insert 69">
				<img src="https://picsum.photos/200?random=70" alt="Random insert 70">
				<img src="https://picsum.photos/200?random=71" alt="Random insert 71">
				<img src="https://picsum.photos/200?random=72" alt="Random insert 72">
				<img src="https://picsum.photos/200?random=73" alt="Random insert 73">
				<img src="https://picsum.photos/200?random=74" alt="Random insert 74">
				<img src="https://picsum.photos/200?random=75" alt="Random insert 75">
				<img src="https://picsum.photos/200?random=76" alt="Random insert 76">
				<img src="https://picsum.photos/200?random=77" alt="Random insert 77">
				<img src="https://picsum.photos/200?random=78" alt="Random insert 78">
				<img src="https://picsum.photos/200?random=79" alt="Random insert 79">
				<img src="https://picsum.photos/200?random=80" alt="Random insert 80">
				<img src="https://picsum.photos/200?random=81" alt="Random insert 81">
				<img src="https://picsum.photos/200?random=82" alt="Random insert 82">
				<img src="https://picsum.photos/200?random=83" alt="Random insert 83">
				<img src="https://picsum.photos/200?random=84" alt="Random insert 84">
				<img src="https://picsum.photos/200?random=85" alt="Random insert 85">
				<img src="https://picsum.photos/200?random=86" alt="Random insert 86">
				<img src="https://picsum.photos/200?random=87" alt="Random insert 87">
				<img src="https://picsum.photos/200?random=88" alt="Random insert 88">
				<img src="https://picsum.photos/200?random=89" alt="Random insert 89">
				<img src="https://picsum.photos/200?random=90" alt="Random insert 90">
				<img src="https://picsum.photos/200?random=91" alt="Random insert 91">
				<img src="https://picsum.photos/200?random=92" alt="Random insert 92">
				<img src="https://picsum.photos/200?random=93" alt="Random insert 93">
				<img src="https://picsum.photos/200?random=94" alt="Random insert 94">
				<img src="https://picsum.photos/200?random=95" alt="Random insert 95">
				<img src="https://picsum.photos/200?random=96" alt="Random insert 96">
				<img src="https://picsum.photos/200?random=97" alt="Random insert 97">
				<img src="https://picsum.photos/200?random=98" alt="Random insert 98">
				<img src="https://picsum.photos/200?random=99" alt="Random insert 99">
			</Carousel>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Checkbox</h2>
		<h4 id="auro-checkbox-basic">Basic</h4>
		<div class="exampleWrapper">
			<CheckboxGroup>
				<span slot="legend">Form label goes here</span>
				<Checkbox value="checkbox option" name="example1" id="checkbox-basic1">Checkbox option</Checkbox>
				<Checkbox value="checkbox option" name="example2" id="checkbox-basic2" checked>Checkbox option</Checkbox>
				<Checkbox value="checkbox option" name="example3" id="checkbox-basic3">Checkbox option</Checkbox>
				<Checkbox value="checkbox option" name="example4" id="checkbox-basic4">Checkbox option</Checkbox>
			</CheckboxGroup>
		</div>

		<h4 id="auro-checkbox-disabled">Disabled</h4>
		<div class="exampleWrapper">
			<CheckboxGroup disabled>
				<span slot="legend">Form label goes here</span>
				<Checkbox value="disabled checkbox option" name="example1" id="checkbox-disabledGroup1">Disabled checkbox option</Checkbox>
				<Checkbox value="disabled checkbox option" name="example2" id="checkbox-disabledGroup2" checked>Disabled checkbox option</Checkbox>
				<Checkbox value="disabled checkbox option" name="example3" id="checkbox-disabledGroup3">Disabled checkbox option</Checkbox>
				<Checkbox value="disabled checkbox option" name="example4" id="checkbox-disabledGroup4">Disabled checkbox option</Checkbox>
			</CheckboxGroup>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Combobox</h2>
		<h4 id="auro-combobox-basic">Basic</h4>
		<div class="exampleWrapper">
			<Combobox>
				<span slot="label">Name</span>
				<Menu>
					<auro-menuoption value="fca" id="airport-fca" suggest="fca montana kalispell">glacier park international</auro-menuoption>
					<auro-menuoption value="sfo" id="airport-sfo" suggest="sfo california san francisco">san francisco international</auro-menuoption>
					<auro-menuoption value="boi" id="airport-boi" suggest="boi idaho boise">gowen field</auro-menuoption>
					<auro-menuoption value="stl" id="airport-stl" suggest="stl missouri st louis">lambert st louis international</auro-menuoption>
					<auro-menuoption value="ylw" id="airport-ylw" suggest="ylw british columbia kelowna">kelowna international</auro-menuoption>
					<auro-menuoption value="ykm" id="airport-ykm" suggest="ykm washington yakima">yakima air terminal</auro-menuoption>
					<auro-menuoption value="puw" id="airport-puw" suggest="puw washington pullman">pullman moscow regional</auro-menuoption>
					<auro-menuoption value="yeg" id="airport-yeg" suggest="yeg alberta edmonton">edmonton international</auro-menuoption>
					<auro-menuoption value="tpa" id="airport-tpa" suggest="tpa florida tampa">tampa international</auro-menuoption>
					<auro-menuoption value="msp" id="airport-msp" suggest="msp minnesota minneapolis">minneapolis st paul international</auro-menuoption>
					<auro-menuoption value="ida" id="airport-ida" suggest="ida idaho idaho falls">idaho falls regional airport</auro-menuoption>
					<auro-menuoption value="mfr" id="airport-mfr" suggest="mfr oregon medford">rogue valley international</auro-menuoption>
					<auro-menuoption value="psp" id="airport-psp" suggest="psp california palm springs">palm springs international</auro-menuoption>
					<auro-menuoption value="lir" id="airport-lir" suggest="lir guanacaste liberia">guanacaste airport</auro-menuoption>
					<auro-menuoption value="oak" id="airport-oak" suggest="oak california oakland">oakland international</auro-menuoption>
					<auro-menuoption value="bos" id="airport-bos" suggest="bos massachusetts boston">logan international</auro-menuoption>
					<auro-menuoption value="bwi" id="airport-bwi" suggest="bwi maryland baltimore">thurgood marshall international</auro-menuoption>
					<auro-menuoption value="dal" id="airport-dal" suggest="dal texas dallas">dallas love field</auro-menuoption>
					<auro-menuoption value="sba" id="airport-sba" suggest="sba california santa barbara">santa barbara municipal</auro-menuoption>
					<auro-menuoption value="mci" id="airport-mci" suggest="mci missouri kansas city">kansas city international</auro-menuoption>
					<auro-menuoption value="koa" id="airport-koa" suggest="koa hawaii kona">kona international</auro-menuoption>
					<auro-menuoption value="pvr" id="airport-pvr" suggest="pvr jalisco puerto vallarta">licenciado gustavo diaz ordaz international</auro-menuoption>
					<auro-menuoption value="wrg" id="airport-wrg" suggest="wrg alaska wrangell">wrangell</auro-menuoption>
					<auro-menuoption value="scc" id="airport-scc" suggest="scc alaska prudhoe bay">deadhorse</auro-menuoption>
					<auro-menuoption value="lto" id="airport-lto" suggest="lto baja california loreto">loreto international</auro-menuoption>
					<auro-menuoption value="ome" id="airport-ome" suggest="ome alaska nome">nome</auro-menuoption>
					<auro-menuoption value="ict" id="airport-ict" suggest="ict kansas wichita">dwight d eisenhower national</auro-menuoption>
					<auro-menuoption value="phl" id="airport-phl" suggest="phl pennsylvania philadelphia">philadelphia international</auro-menuoption>
					<auro-menuoption value="dfw" id="airport-dfw" suggest="dfw texas dallas">dallas fort worth international</auro-menuoption>
					<auro-menuoption value="ind" id="airport-ind" suggest="ind indiana indianapolis">indianapolis international</auro-menuoption>
					<auro-menuoption value="smf" id="airport-smf" suggest="smf california sacramento">sacramento international</auro-menuoption>
					<auro-menuoption value="sit" id="airport-sit" suggest="sit alaska sitka">rocky gutierrez</auro-menuoption>
					<auro-menuoption value="dut" id="airport-dut" suggest="dut alaska dutch harbor">unalaska</auro-menuoption>
					<auro-menuoption value="cdv" id="airport-cdv" suggest="cdv alaska cordova">merle mudhole smith</auro-menuoption>
					<auro-menuoption value="psg" id="airport-psg" suggest="psg alaska petersburg">james a johnson</auro-menuoption>
					<auro-menuoption value="bna" id="airport-bna" suggest="bna tennessee nashville">nashville international</auro-menuoption>
					<auro-menuoption value="geg" id="airport-geg" suggest="geg washington spokane">spokane international</auro-menuoption>
					<auro-menuoption value="ktn" id="airport-ktn" suggest="ktn alaska ketchikan">ketchikan international</auro-menuoption>
					<auro-menuoption value="pit" id="airport-pit" suggest="pit pennsylvania pittsburgh">pittsburgh international</auro-menuoption>
					<auro-menuoption value="sbp" id="airport-sbp" suggest="sbp california san luis obispo">san luis obispo regional</auro-menuoption>
					<auro-menuoption value="bur" id="airport-bur" suggest="bur california burbank">hollywood burbank</auro-menuoption>
					<auro-menuoption value="msy" id="airport-msy" suggest="msy louisiana new orleans">louis armstrong international</auro-menuoption>
					<auro-menuoption value="pae" id="airport-pae" suggest="pae washington everett">paine field</auro-menuoption>
					<auro-menuoption value="cvg" id="airport-cvg" suggest="cvg ohio cincinnati">cincinnati northern kentucky international</auro-menuoption>
					<auro-menuoption value="yak" id="airport-yak" suggest="yak alaska yakutat">yakutat</auro-menuoption>
					<auro-menuoption value="pdx" id="airport-pdx" suggest="pdx oregon portland">portland international</auro-menuoption>
					<auro-menuoption value="anc" id="airport-anc" suggest="anc alaska anchorage">ted stevens</auro-menuoption>
					<auro-menuoption value="sea" id="airport-sea" suggest="sea washington seattle">seattle tacoma international</auro-menuoption>
					<auro-menuoption value="san" id="airport-san" suggest="san california san diego">san diego international</auro-menuoption>
					<auro-menuoption value="sat" id="airport-sat" suggest="sat texas san antonio">san antonio international</auro-menuoption>
					<auro-menuoption value="fat" id="airport-fat" suggest="fat california fresno">fresno yosemite international</auro-menuoption>
					<auro-menuoption value="aus" id="airport-aus" suggest="aus texas austin">austin bergstrom international</auro-menuoption>
					<auro-menuoption value="ord" id="airport-ord" suggest="ord illinois chicago">ohare international</auro-menuoption>
					<auro-menuoption value="gdl" id="airport-gdl" suggest="gdl jalisco guadalajara">guadalajara international</auro-menuoption>
					<auro-menuoption value="sjc" id="airport-sjc" suggest="sjc california san jose">san jose international</auro-menuoption>
					<auro-menuoption value="jnu" id="airport-jnu" suggest="jnu alaska juneau">juneau international</auro-menuoption>
					<auro-menuoption value="rdm" id="airport-rdm" suggest="rdm oregon redmond">roberts field</auro-menuoption>
					<auro-menuoption value="sts" id="airport-sts" suggest="sts california sonoma">charles m schulz</auro-menuoption>
					<auro-menuoption value="fai" id="airport-fai" suggest="fai alaska fairbanks">fairbanks international</auro-menuoption>
					<auro-menuoption value="rdu" id="airport-rdu" suggest="rdu north carolina raleigh">raleigh durham international</auro-menuoption>
					<auro-menuoption value="oma" id="airport-oma" suggest="oma nebraska omaha">eppley airfield</auro-menuoption>
					<auro-menuoption value="bzn" id="airport-bzn" suggest="bzn montana bozeman">bozeman yellowstone international</auro-menuoption>
					<auro-menuoption value="ont" id="airport-ont" suggest="ont california ontario">ontario international</auro-menuoption>
					<auro-menuoption value="ogg" id="airport-ogg" suggest="ogg hawaii maui">kahului international</auro-menuoption>
					<auro-menuoption value="sun" id="airport-sun" suggest="sun idaho sun valley">friedman memorial</auro-menuoption>
					<auro-menuoption value="mzt" id="airport-mzt" suggest="mzt sinaloa mazatlan">general rafael buelna international</auro-menuoption>
					<auro-menuoption value="dlg" id="airport-dlg" suggest="dlg alaska dillingham">dillingham</auro-menuoption>
					<auro-menuoption value="adq" id="airport-adq" suggest="adq alaska kodiak">kodiak</auro-menuoption>
					<auro-menuoption value="den" id="airport-den" suggest="den colorado denver">denver international</auro-menuoption>
					<auro-menuoption value="zlo" id="airport-zlo" suggest="zlo colima manzanillo">manzanillo international</auro-menuoption>
					<auro-menuoption value="sjd" id="airport-sjd" suggest="sjd baja california los cabos">los cabos international</auro-menuoption>
					<auro-menuoption value="elp" id="airport-elp" suggest="elp texas el paso">el paso international airport</auro-menuoption>
					<auro-menuoption value="atl" id="airport-atl" suggest="atl georgia atlanta">hartsfield jackson international</auro-menuoption>
					<auro-menuoption value="lax" id="airport-lax" suggest="lax california los angeles">los angeles international</auro-menuoption>
					<auro-menuoption value="rsw" id="airport-rsw" suggest="rsw florida fort myers">southwest florida international</auro-menuoption>
					<auro-menuoption value="cle" id="airport-cle" suggest="cle ohio cleveland">cleveland hopkins international airport</auro-menuoption>
					<auro-menuoption value="otz" id="airport-otz" suggest="otz alaska kotzebue">ralph wien memorial</auro-menuoption>
					<auro-menuoption value="bze" id="airport-bze" suggest="bze belize belize city">philip sw goldson international airport</auro-menuoption>
					<auro-menuoption value="eat" id="airport-eat" suggest="eat washington wenatchee">pangborn memorial</auro-menuoption>
					<auro-menuoption value="dtw" id="airport-dtw" suggest="dtw michigan detroit">detroit metropolitan</auro-menuoption>
					<auro-menuoption value="bet" id="airport-bet" suggest="bet alaska bethel">bethel</auro-menuoption>
					<auro-menuoption value="dca" id="airport-dca" suggest="dca district of columbia washington">ronald reagan national</auro-menuoption>
					<auro-menuoption value="rno" id="airport-rno" suggest="rno nevada reno">reno tahoe international</auro-menuoption>
					<auro-menuoption value="brw" id="airport-brw" suggest="brw alaska barrow">wiley post will rogers</auro-menuoption>
					<auro-menuoption value="mry" id="airport-mry" suggest="mry california monterey">monterey regional</auro-menuoption>
					<auro-menuoption value="hnl" id="airport-hnl" suggest="hnl hawaii oahu">honolulu international</auro-menuoption>
					<auro-menuoption value="okc" id="airport-okc" suggest="okc oklahoma oklahoma city">will rogers world</auro-menuoption>
					<auro-menuoption value="iad" id="airport-iad" suggest="iad virginia dulles">washington dulles international</auro-menuoption>
					<auro-menuoption value="mia" id="airport-mia" suggest="mia florida miami">miami international</auro-menuoption>
					<auro-menuoption value="bli" id="airport-bli" suggest="bli washington bellingham">bellingham international</auro-menuoption>
					<auro-menuoption value="hln" id="airport-hln" suggest="hln montana helena">helena regional</auro-menuoption>
					<auro-menuoption value="gtf" id="airport-gtf" suggest="gtf montana great falls">great falls international</auro-menuoption>
					<auro-menuoption value="zih" id="airport-zih" suggest="zih guerrero zihuatanejo">ixtapa zihuatanejo international</auro-menuoption>
					<auro-menuoption value="yyc" id="airport-yyc" suggest="yyc alberta calgary">calgary international</auro-menuoption>
					<auro-menuoption value="sna" id="airport-sna" suggest="sna california santa ana">john wayne</auro-menuoption>
					<auro-menuoption value="fll" id="airport-fll" suggest="fll florida fort lauderdale">fort lauderdale hollywood international</auro-menuoption>
					<auro-menuoption value="ewr" id="airport-ewr" suggest="ewr new jersey newark">newark liberty international</auro-menuoption>
					<auro-menuoption value="hdn" id="airport-hdn" suggest="hdn colorado steamboat springs">yampa valley regional</auro-menuoption>
					<auro-menuoption value="psc" id="airport-psc" suggest="psc washington pasco">tri cities</auro-menuoption>
					<auro-menuoption value="tus" id="airport-tus" suggest="tus arizona tucson">tucson international</auro-menuoption>
					<auro-menuoption value="abq" id="airport-abq" suggest="abq new mexico albuquerque">albuquerque international sunport</auro-menuoption>
					<auro-menuoption value="jfk" id="airport-jfk" suggest="jfk new york new york">john f kennedy international</auro-menuoption>
					<auro-menuoption value="yvr" id="airport-yvr" suggest="yvr british columbia vancouver">vancouver international</auro-menuoption>
					<auro-menuoption value="sjo" id="airport-sjo" suggest="sjo san jose alajuela province">juan santamaria international</auro-menuoption>
					<auro-menuoption value="las" id="airport-las" suggest="las nevada las vegas">harry reid international airport</auro-menuoption>
					<auro-menuoption value="lih" id="airport-lih" suggest="lih hawaii kauai">lihue international</auro-menuoption>
					<auro-menuoption value="mso" id="airport-mso" suggest="mso montana missoula">missoula international</auro-menuoption>
					<auro-menuoption value="alw" id="airport-alw" suggest="alw washington walla walla">walla walla regional</auro-menuoption>
					<auro-menuoption value="mke" id="airport-mke" suggest="mke wisconsin milwaukee">milwaukee mitchell international</auro-menuoption>
					<auro-menuoption value="eug" id="airport-eug" suggest="eug oregon eugene">mahlon sweet field</auro-menuoption>
					<auro-menuoption value="akn" id="airport-akn" suggest="akn alaska king salmon">king salmon</auro-menuoption>
					<auro-menuoption value="cun" id="airport-cun" suggest="cun quintana roo cancun">cancun international</auro-menuoption>
					<auro-menuoption value="rdd" id="airport-rdd" suggest="rdd california redding">redding municipal airport</auro-menuoption>
					<auro-menuoption value="mco" id="airport-mco" suggest="mco florida orlando">orlando international</auro-menuoption>
					<auro-menuoption value="slc" id="airport-slc" suggest="slc utah salt lake city">salt lake city international</auro-menuoption>
					<auro-menuoption value="phx" id="airport-phx" suggest="phx arizona phoenix">sky harbor international</auro-menuoption>
					<auro-menuoption value="bil" id="airport-bil" suggest="bil montana billings">billings logan international</auro-menuoption>
					<auro-menuoption value="gst" id="airport-gst" suggest="gst alaska gustavus">gustavus</auro-menuoption>
					<auro-menuoption value="adk" id="airport-adk" suggest="adk alaska adak">adak</auro-menuoption>
					<auro-menuoption value="cvg" id="airport-cvg" suggest="cvg kentucky hebron">cincinnati northern kentucky international</auro-menuoption>
					<auro-menuoption value="jac" id="airport-jac" suggest="jac wyoming jackson">jackson hole airport</auro-menuoption>
					<auro-menuoption value="cmh" id="airport-cmh" suggest="cmh ohio columbus">john glenn columbus international</auro-menuoption>
					<auro-menuoption value="yyj" id="airport-yyj" suggest="yyj british columbia victoria">victoria international</auro-menuoption>
					<auro-menuoption value="chs" id="airport-chs" suggest="chs south carolina charleston">charleston international</auro-menuoption>
					<auro-menuoption value="iah" id="airport-iah" suggest="iah texas houston">george bush intercontinental</auro-menuoption>
					<auro-menuoption static nomatch>Unknown airport... </auro-menuoption>
				</Menu>
			</Combobox>
		</div>

		<h4 id="auro-combobox-checkmark">Checkmark</h4>
		<div class="exampleWrapper">
			<Combobox checkmark>
				<span slot="label">Name</span>
				<Menu>
					<auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
					<auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
					<auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
					<auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
					<auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
					<auro-menuoption static nomatch>No matching option</auro-menuoption>
				</Menu>
			</Combobox>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Dropdown</h2>
		<h4 id="auro-dropdown-basic">Basic</h4>
		<div class="exampleWrapper">
			<Dropdown id="common" common aria-label="Label content for screen reader">
				<div style="padding: var(--auro-size-sm);">
					Lorem ipsum solar
					<br />
					<auro-button onclick="document.querySelector('#common').hide()">
					Dismiss Dropdown
					</auro-button>
				</div>
				<span slot="helpText">
					Help text
				</span>
				<div slot="trigger">
					Trigger
				</div>
			</Dropdown>
		</div>

		<h4 id="auro-dropdown-label">Label</h4>
		<div class="exampleWrapper">
			<Dropdown id="commonSlot" bordered rounded inset chevron>
				<div style="padding: var(--auro-size-sm);">
					Lorem ipsum solar
					<br />
					<auro-button onclick="document.querySelector('#commonSlot').hide()">
					Dismiss Dropdown
					</auro-button>
				</div>
				<span slot="helpText">
					Help text
				</span>
				<span slot="label">
					Element label (default text will be read by screen reader)
				</span>
				<div slot="trigger">
					Trigger
				</div>
			</Dropdown>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Flight</h2>
		<h4 id="auro-flight-mainline-nonstop">Mainline Nonstop</h4>
		<div class="exampleWrapper">
			<Flight
				flights='["AS 1436"]'
				duration="161"
				departureTime="2022-07-13T12:15:00-07:00"
				departureStation="SEA"
				arrivalTime="2022-07-13T14:56:00-07:00"
				arrivalStation="LAX">
					<Flightline></Flightline>
			</Flight>
		</div>

		<h4 id="auro-flight-mainline-nextday">Mainline next day arrival/departure</h4>
		<div class="exampleWrapper">
			<Flight
				flights='["AS 880"]'
				duration="350"
				departureTime="2022-05-31T21:55:00-10:00"
				departureStation="KOA"
				arrivalTime="2022-06-01T06:45:00-07:00"
				arrivalStation="SEA">
					<Flightline></Flightline>
			</Flight>
		</div>

		<h4 id="auro-flight-mainline-onestop">Mainline one-stop</h4>
		<div class="exampleWrapper">
			<Flight
				flights='["AS 374"]'
				duration="120"
				departureTime="2022-05-04T01:55:00-09:00"
				departureStation="ANC"
				arrivalTime="2022-05-04T03:55:00-09:00"
				arrivalStation="ADK"
				stops={flightData.stopOneStep}>
					<Flightline>
						<auro-flight-segment stopover iata="CDB"></auro-flight-segment>
					</Flightline>
			</Flight>
		</div>

		<h4 id="auro-flight-mainline-multistop">Mainline multi-stop</h4>
		<div class="exampleWrapper">
			<Flight
				flights='["AS 65"]'
				duration="353"
				departureTime="2022-05-04T00:00:00-09:00"
				departureStation="KTN"
				arrivalTime="2022-05-04T05:53:00-09:00"
				arrivalStation="ANC"    
				stops={flightData.stopOver}>
					<Flightline>
						<auro-flight-segment stopover iata="WRG"></auro-flight-segment>
						<auro-flight-segment stopover iata="PSG"></auro-flight-segment>
						<auro-flight-segment stopover iata="JNU"></auro-flight-segment>
					</Flightline>
			</Flight>
		</div>

		<h4 id="auro-flight-mainline-layover">Mainline + mainline connection w/layover</h4>
		<div class="exampleWrapper">
			<Flight
			flights='["AS 161", "AA 2269"]'
			duration="704"
			departureTime="2022-07-21T00:55:00-09:00"
			departureStation="ANC"
			arrivalTime="2022-07-21T16:39:00-04:00"
			arrivalStation="BOS"
			stops={flightData.layOver}>
				<Flightline>
					<auro-flight-segment iata="ORD" duration="3h 10m"></auro-flight-segment>
				</Flightline>
				<span slot="footer">
					<auro-icon category="logos" name="tail-AS" style="width: 24px" aria-hidden="true"></auro-icon>
					AS161 is subject to government approval <br aria-hidden="true"/>
					<auro-icon category="logos" name="tail-AA" style="width: 24px" aria-hidden="true"></auro-icon>
					AA2269 is operated by American Airlines
				</span>
			</Flight>
		</div>

		<h4 id="auro-flight-departure-reroute">Departure reroute information</h4>
		<div class="exampleWrapper">
			<Flight
			flights='["AS 8"]'
			duration="330"
			departureTime="2022-07-30T07:40:00-07:00"
			departureStation="SEA"
			arrivalTime="2022-07-30T16:40:00-04:00"
			arrivalStation="EWR"
			reroutedArrivalStation="AVP">
				<Flightline></Flightline>
				<span slot="departureHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-07-30T07:20:00-07:00"></auro-datetime></span>
				<span slot="arrivalHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-05-04T17:48:00-04:00"></auro-datetime></span>
			</Flight>
		</div>

		<h4 id="auro-flight-arrival-reroute">Arrival reroute information</h4>
		<div class="exampleWrapper">
			<Flight
			flights='["AS 8"]'
			duration="330"
			departureTime="2022-07-30T07:40:00-07:00"
			departureStation="SEA"
			arrivalTime="2022-07-30T16:40:00-04:00"
			arrivalStation="EWR"
			reroutedDepartureStation="PAE">
				<Flightline></Flightline>
				<span slot="departureHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-07-30T07:20:00-07:00"></auro-datetime></span>
				<span slot="arrivalHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-05-04T17:48:00-04:00"></auro-datetime></span>
			</Flight>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Flightline</h2>
		<h4 id="auro-flightline-nonstop">Nonstop</h4>
		<div class="exampleWrapper">
			<Flightline></Flightline>
		</div>

		<h4 id="auro-flightline-canceled">Canceled</h4>
		<div class="exampleWrapper">
			<Flightline canceled></Flightline>
			<Flightline canceled>
				<auro-flight-segment iata="EWR" duration="3h 40m"></auro-flight-segment>
			</Flightline>
		</div>

		<h4 id="auro-flightline-single-layover">Flight with a single layover</h4>
		<div class="exampleWrapper">
			<Flightline>
				<auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
			</Flightline>
			<Flightline>
				<auro-flight-segment nextDay iata="ORD" duration="3h 40m"></auro-flight-segment>
			</Flightline>
		</div>

		<h4 id="auro-flightline-canceled-layover">Canceled with single layover</h4>
		<div class="exampleWrapper">
			<Flightline>
				<auro-flight-segment canceled iata="EWR" duration="3h 40m"></auro-flight-segment>
			</Flightline>
		</div>

		<h4 id="auro-flightline-single-stopover">Flight with a single stopover</h4>
		<div class="exampleWrapper">
			<Flightline>
				<auro-flight-segment stopover iata="CDB"></auro-flight-segment>
			</Flightline>
		</div>

		<h4 id="auro-flightline-stopover-and-layover">Flight with a stopover and a layover</h4>
		<div class="exampleWrapper">
			<Flightline>
				<auro-flight-segment stopover iata="YAK"></auro-flight-segment>
				<auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
			</Flightline>
			<Flightline>
				<auro-flight-segment stopover iata="CDB"></auro-flight-segment>
				<auro-flight-segment iata="ANC" duration="1h 30m"></auro-flight-segment>
				<auro-flight-segment iata="SEA" duration="0h 40m"></auro-flight-segment>
				<auro-flight-segment iata="SFO" duration="1h 40m"></auro-flight-segment>
			</Flightline>
		</div>

		<h4 id="auro-flightline-canceled-stopover-and-layover">Canceled with layovers and stopovers</h4>
		<div class="exampleWrapper">
			<Flightline>
				<auro-flight-segment stopover iata="YAK"></auro-flight-segment>
				<auro-flight-segment stopover iata="WRG"></auro-flight-segment>
				<auro-flight-segment canceled iata="SEA" duration="0h 40m"></auro-flight-segment>
				<auro-flight-segment iata="BOS" duration="1h 40m"></auro-flight-segment>
				<auro-flight-segment canceled destinationCanceled iata="DUB" duration="13h 40m"></auro-flight-segment>
			</Flightline>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Input</h2>
		<h4 id="auro-input-default">Default Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo1" style="width: 45%"></Input>
			<Input id="demo2" style="width: 45%" bordered></Input>
		</div>

		<h4 id="auro-input-label">Label Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo3" style="width: 45%">
				<span slot="label">Name</span>
			</Input>
			<Input id="demo4" bordered style="width: 45%">
				<span slot="label">Name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>

		<h4 id="auro-input-dateMax">Date Max Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMaxDate" style="width: 45%" type="month-day-year" max="03/25/2023" setCustomValidityRangeOverflow="The selected date is past the defined maximum date.">
				<span slot="label">Choose a date</span>
			</Input>
		</div>

		<h4 id="uro-input-dateMin">Date Min Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMinDate" style="width: 45%" type="month-day-year" min="03/25/2023" setCustomValidityRangeUnderflow="The selected date is before the defined minimum date.">
				<span slot="label">Choose a date</span>
			</Input>
		</div>

		<h4 id="auro-input-borderless">Borderless Input</h4>
		<div class="exampleWrapper">
			<Input id="demoBorderless" borderless style="width: 45%">
				<span slot="label">Name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>

		<h4 id="auro-input-numberMax">Number Max Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMaxNumber" style="width: 45%" type="numeric" max="10" setCustomValidityRangeOverflow="The selected value is above the defined maximum.">
				<span slot="label">Choose a number</span>
			</Input>
		</div>

		<h4 id="auro-input-numberMin">Number Min Input</h4>
		<div class="exampleWrapper">
			<Input id="demoMinNumber" style="width: 45%" type="numeric" min="10" setCustomValidityRangeUnderflow="The selected value is below the defined minimum.">
				<span slot="label">Choose a number</span>
			</Input>
		</div>

		<h4 id="auro-input-pattern">Pattern Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo5" style="width: 45%" pattern={String('[a-z]{1,15}')} spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
				<span slot="label">Username</span>
				<span slot="helptext">Please enter a username.</span>
			</Input>
			<Input id="demo6" style="width: 45%" bordered pattern={String('[a-z]{1,15}')} spellcheck="false" setCustomValidityBadInput="Only contain lowercase letters w/no spaces">
				<span slot="label">Username</span>
				<span slot="helptext">Please enter a username.</span>
			</Input>
		</div>

		<h4 id="auro-input-placeholder">Placeholder Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo50" style="width: 45%" required placeholder="John Doe">
				<span slot="label">Full name</span>
			</Input>
			<Input id="demo51" style="width: 45%" required bordered placeholder="John Doe">
				<span slot="label">Full name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>

		<h4 id="auro-input-required">Required Input</h4>
		<div class="exampleWrapper exampleWrapper--flex">
			<Input id="demo5" style="width: 45%" required>
				<span slot="label">Name</span>
			</Input>
			<Input id="demo6" style="width: 45%" required bordered>
				<span slot="label">Name</span>
				<span slot="helptext">Please enter your full name.</span>
			</Input>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Loader</h2>
		<h4 id="auro-loader-gallery">Loader Gallery</h4>
		<div class="exampleWrapper">
			<Loader ringworm md></Loader >
			<Loader orbit md></Loader >
			<Loader pulse md></Loader >
			<Loader laser></Loader >
		</div>

		<h4 id="auro-loader-sizes">Loader Size</h4>
		<div class="exampleWrapper">
			<Loader ringworm></Loader >
			<Loader ringworm sm></Loader >
			<Loader ringworm md></Loader >
			<Loader ringworm lg></Loader >
			<Loader ringworm xl></Loader >
		</div>

		<h4 id="auro-loader-color">Loader Color</h4>
		<div class="exampleWrapper">
			<Loader pulse onlight md></Loader >
		</div>

		<h4 id="auro-loader-color-onDark">Loader onDark</h4>
		<div class="exampleWrapper--ondark">
			<Loader pulse ondark sm></Loader >
			<Loader pulse white sm></Loader >
		</div>

		<h4 id="auro-loader-custom">Loader Custom</h4>
		<div class="exampleWrapper">
			<Loader style="color: pink" ringworm md></Loader >
		</div>

		<h4 id="auro-loader-custom-animation">Loader Animation</h4>
		<div class="exampleWrapper">
			<Loader style="animation-duration: 8s" ondark orbit lg></Loader >
			<Loader style="animation-duration: 1s" white orbit xl></Loader >
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Lockup</h2>
		<h4 id="auro-lockup-default">Default</h4>
		<div class="exampleWrapper">
			<Lockup>
				<span slot="title">Place title text here</span>
				<span slot="subtitle">Place subtitle text here</span>
			</Lockup>
		</div>

		<h4 id="auro-lockup-onDark">Ondark</h4>
		<div class="exampleWrapper--ondark">
			<Lockup ondark>
				<span slot="title">Product Name</span>
				<span slot="subtitle">Powered by Partner Name</span>
			</Lockup>
			<Lockup ondark oneworld></Lockup>
		</div>

		<h4 id="auro-lockup-one-logo">With One Logo</h4>
		<div class="exampleWrapper">
			<Lockup oneworld></Lockup>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Menu</h2>
		<h4 id="auro-menu-default">Default</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-disabled">Disabled</h4>
		<div class="exampleWrapper--ondark">
			<Menu disabled>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab">Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share">Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-scroll">Scroll</h4>
		<div class="exampleWrapper">
			<Menu id="alpha" style="max-height: 200px">
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<hr>
				<Menu id="beta">
					<auro-menuoption value="apples">Apples</auro-menuoption>
					<auro-menuoption value="oranges">Oranges</auro-menuoption>
					<auro-menuoption value="pears">Pears</auro-menuoption>
					<auro-menuoption value="grapes">Grapes</auro-menuoption>
					<auro-menuoption value="kiwi">Kiwi</auro-menuoption>
					<hr>
					<Menu id="charlie">
						<auro-menuoption value="person">Person</auro-menuoption>
						<auro-menuoption value="woman">Woman</auro-menuoption>
						<auro-menuoption value="man">Man</auro-menuoption>
						<auro-menuoption value="camera">Camera</auro-menuoption>
						<auro-menuoption value="tv">TV</auro-menuoption>
					</Menu>
				</Menu>
				<hr>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
				<hr>
				<Menu id="delta">
					<auro-menuoption value="cars">Cars</auro-menuoption>
					<auro-menuoption value="trucks">Trucks</auro-menuoption>
					<auro-menuoption value="boats">Boats</auro-menuoption>
					<auro-menuoption value="planes">Planes</auro-menuoption>
					<auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
				</Menu>
			</Menu>
		</div>

		<h4 id="auro-menu-match-word">Match Word</h4>
		<div class="exampleWrapper">
			<Input id="matchWordInput" onChange="auroMenuMatchWordExample()" keyup="auroMenuMatchWordExample()" required>
				<span slot="label">Enter a value to match in the menu</span>
			</Input>
			<br />
			<Menu id="matchWordMenu">
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menu>
				<auro-menuoption value="apples">Apples</auro-menuoption>
				<auro-menuoption value="oranges">Oranges</auro-menuoption>
				<auro-menuoption value="peaches">Peaches</auro-menuoption>
				</auro-menu>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-nested">Nested Menu</h4>
		<div class="exampleWrapper">
			<Menu id="alpha">
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<hr>
				<Menu id="beta">
					<auro-menuoption value="apples">Apples</auro-menuoption>
					<auro-menuoption value="oranges">Oranges</auro-menuoption>
					<auro-menuoption value="pears">Pears</auro-menuoption>
					<auro-menuoption value="grapes">Grapes</auro-menuoption>
					<auro-menuoption value="kiwi">Kiwi</auro-menuoption>
					<hr>
					<Menu id="charlie">
						<auro-menuoption value="person">Person</auro-menuoption>
						<auro-menuoption value="woman">Woman</auro-menuoption>
						<auro-menuoption value="man">Man</auro-menuoption>
						<auro-menuoption value="camera">Camera</auro-menuoption>
						<auro-menuoption value="tv">TV</auro-menuoption>
					</Menu>
				</Menu>
				<hr>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
				<hr>
				<Menu id="delta">
					<auro-menuoption value="cars">Cars</auro-menuoption>
					<auro-menuoption value="trucks">Trucks</auro-menuoption>
					<auro-menuoption value="boats">Boats</auro-menuoption>
					<auro-menuoption value="planes">Planes</auro-menuoption>
					<auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
				</Menu>
			</Menu>
		</div>

		<h4 id="auro-menu-noCheckmark">No Checkmark</h4>
		<div class="exampleWrapper">
			<Menu nocheckmark>
				<auro-menuoption value="stops">Stops</auro-menuoption>
				<auro-menuoption value="price">Price</auro-menuoption>
				<auro-menuoption value="duration">Duration</auro-menuoption>
				<hr>
				<Menu>
					<auro-menuoption value="apples">Apples</auro-menuoption>
					<auro-menuoption value="oranges">Oranges</auro-menuoption>
					<auro-menuoption value="pears">Pears</auro-menuoption>
					<auro-menuoption value="grapes">Grapes</auro-menuoption>
					<auro-menuoption value="kiwi">Kiwi</auro-menuoption>
					<hr>
					<Menu>
						<auro-menuoption value="person">Person</auro-menuoption>
						<auro-menuoption value="woman">Woman</auro-menuoption>
						<auro-menuoption value="man">Man</auro-menuoption>
						<auro-menuoption value="camera">Camera</auro-menuoption>
						<auro-menuoption value="tv">TV</auro-menuoption>
					</Menu>
				</Menu>
				<hr>
				<auro-menuoption value="departure">Departure</auro-menuoption>
				<auro-menuoption value="arrival">Arrival</auro-menuoption>
				<hr>
				<Menu>
					<auro-menuoption value="cars">Cars</auro-menuoption>
					<auro-menuoption value="trucks">Trucks</auro-menuoption>
					<auro-menuoption value="boats">Boats</auro-menuoption>
					<auro-menuoption value="planes">Planes</auro-menuoption>
					<auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
				</Menu>
			</Menu>
		</div>

		<h4 id="auro-menu-preSelected">Preselected Option</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window" selected>New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share" disabled>Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="menu-restricted-long-option">Restricted long option</h4>
		<div class="exampleWrapper">
			<Menu style="width: 300px">
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab">Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as 'option_10_redevelopment_hover_scenario.png'</auro-menuoption>
				<hr>
				<auro-menuoption value="share">Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-with-disabled-state">With Disabled State</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab" disabled>Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share" disabled>Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>

		<h4 id="auro-menu-horizontal-separator">Horizontal Separator</h4>
		<div class="exampleWrapper">
			<Menu>
				<auro-menuoption value="new tab">New tab</auro-menuoption>
				<auro-menuoption value="new window">New window</auro-menuoption>
				<auro-menuoption value="open file">Open file</auro-menuoption>
				<auro-menuoption value="open location">Open location</auro-menuoption>
				<hr>
				<auro-menuoption value="close window">Close window</auro-menuoption>
				<auro-menuoption value="close tab">Close tab</auro-menuoption>
				<auro-menuoption value="save page as...">Save page as...</auro-menuoption>
				<hr>
				<auro-menuoption value="share">Share</auro-menuoption>
				<hr>
				<auro-menuoption value="print">Print</auro-menuoption>
			</Menu>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Nav</h2>
		<h4 id="auro-nav-basic">Default</h4>
		<div class="exampleWrapper">
			<Nav>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
				<auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
				<auro-breadcrumb>Current</auro-breadcrumb>
			</Nav>
		</div>

		<h4 id="auro-nav-anchor">Anchor Nav</h4>
		<div class="exampleWrapper">
			<div style="display: flex; flex-direction: row;">
				<div style="flex: 1; margin-right: 100px;">
				This is example content. Scrolling the content inside this box will automatically make selections in the menu on the right.
				<div class="anchorNavContentContainer" style="max-height: 200px; overflow-y: auto; background: white; border: solid 1px; position: relative; padding: 10px;">
					<h2 id="sectionOne">Section 1</h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus. Consequat interdum varius sit amet mattis vulputate. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eget nunc lobortis mattis aliquam faucibus purus in. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Pellentesque sit amet porttitor eget dolor morbi non arcu. Turpis egestas maecenas pharetra convallis posuere morbi leo. Sagittis nisl rhoncus mattis rhoncus urna. Ut tellus elementum sagittis vitae. Viverra adipiscing at in tellus integer feugiat scelerisque.
					<h2 id="sectionTwo">Section 2</h2>
					Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Sed euismod nisi porta lorem mollis aliquam ut. Ac turpis egestas sed tempus urna et. Lectus urna duis convallis convallis tellus. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Dictum sit amet justo donec enim diam. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sociis natoque penatibus et magnis dis. Aliquam purus sit amet luctus venenatis. Sed elementum tempus egestas sed sed risus pretium quam.
					<h3 id="sectionTwoOne">Section 2.1</h3>
					Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor. Sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim. Quam quisque id diam vel quam elementum pulvinar. In mollis nunc sed id semper risus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Duis ut diam quam nulla porttitor massa id.
					<h2 id="sectionThree">Section 3</h2>
					Scelerisque viverra mauris in aliquam sem. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Augue interdum velit euismod in pellentesque massa. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Adipiscing elit ut aliquam purus. Non sodales neque sodales ut etiam. Amet commodo nulla facilisi nullam vehicula ipsum a. Nunc sed blandit libero volutpat sed cras. Vestibulum sed arcu non odio euismod lacinia at quis. Sagittis eu volutpat odio facilisis. Ipsum suspendisse ultrices gravida dictum fusce ut. Ut sem nulla pharetra diam sit amet nisl. Nec tincidunt praesent semper feugiat nibh. Urna neque viverra justo nec ultrices dui.
					<h2 id="sectionFour">Section 4</h2>
					Massa sapien faucibus et molestie ac feugiat. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Ultrices mi tempus imperdiet nulla malesuada pellentesque. A diam sollicitudin tempor id eu nisl nunc. Morbi non arcu risus quis varius. Aliquam eleifend mi in nulla. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet facilisis magna etiam tempor orci eu lobortis. Tellus cras adipiscing enim eu turpis egestas. Odio euismod lacinia at quis risus. Posuere lorem ipsum dolor sit amet. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. At volutpat diam ut venenatis tellus in metus vulputate. Vivamus at augue eget arcu dictum varius duis at. Dictum sit amet justo donec enim diam vulputate ut. Euismod in pellentesque massa placerat duis ultricies lacus sed. Vitae nunc sed velit dignissim sodales ut eu sem integer.
					<h2 id="sectionFive">Section 5</h2>
					Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor. Sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim. Quam quisque id diam vel quam elementum pulvinar. In mollis nunc sed id semper risus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Duis ut diam quam nulla porttitor massa id.
				</div>
				</div>
				<Nav anchorNavContent=".anchorNavContentContainer" style="flex: 1; max-height: 400px; overflow-y: auto; background: white; border: solid 1px; position: relative; padding: 10px; margin-top: 47px;">
					<span slot="label">Anchor Navigation</span>
					<span slot="mobileToggleCollapsed">View More</span>
					<span slot="mobileToggleExpanded">View Less</span>
					<auro-anchorlink href="#sectionOne">Section 1</auro-anchorlink>
					<auro-anchorlink href="#sectionTwo">Section 2</auro-anchorlink>
					<auro-anchorlink href="#sectionTwoOne">Section 2.1</auro-anchorlink>
					<auro-anchorlink href="#sectionThree">Section 3</auro-anchorlink>
					<auro-anchorlink href="#sectionFour">Section 4<i> - with really long text - Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor.</i></auro-anchorlink>
					<auro-anchorlink href="#sectionFive">Section 5</auro-anchorlink>
				</Nav>
			</div>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Pane</h2>
		<h4 id="auro-pane-basic">Basic Table</h4>
		<div class="exampleWrapper">
			<Pane date="2020-09-20"></Pane>
			<Pane date="2020-09-21" selected></Pane>
			<Pane date="2020-09-22" disabled></Pane>
		</div>

		<h4 id="auro-pane-date-price">Date and price</h4>
		<div class="exampleWrapper">
			<Pane date="2020-09-20" price="$500"></Pane>
			<Pane date="2020-09-21" price="$501" selected="true"></Pane>
			<Pane date="2020-09-22" price="$480" disabled="true"></Pane>
		</div>

		<h4 id="auro-pane-small">Small Size</h4>
		<div class="exampleWrapper">
			<Pane date="2020-09-20" price="$500" sm></Pane>
			<Pane date="2020-09-21" price="$501" selected="true" sm></Pane>
			<Pane date="2020-09-22" price="$480" disabled="true" sm></Pane>
		</div>
	</section>

	<!-- TODO: UPDATE THIS STORY -->
	<section class="component-container">
		<h2>Auro Popover</h2>
		<h4 id="auro-popover-default">Default</h4>
		<div class="exampleWrapper">
			<Popover>
				Top popover content!
				<auro-button slot="trigger">Popover Test</auro-button>
			</Popover>
			
			<!-- Using the placement=bottom attribute -->
			<Popover placement="bottom">
				Popover content!
				<auro-button secondary slot="trigger">Popover Test</auro-button>
			</Popover>
		</div>

		<h4 id="auro-popover-space">Add Space Popover</h4>
		<div class="exampleWrapper">
			<Popover addSpace>
				Notice this popover is a little<br>further away from the trigger.
				<auro-button slot="trigger">Popover w/additional space above</auro-button>
			</Popover>
			
			<Popover placement="bottom" addSpace>
				Notice this popover is a little<br>further away from the trigger.
				<auro-button secondary slot="trigger">Popover w/additional space below</auro-button>
			</Popover>
		</div>

		<h4 id="auro-popover-remove-space">Remove Space Popover</h4>
		<div class="exampleWrapper">
			<Popover removeSpace>
				Notice this popover is a little<br>closer to the trigger.
			
				<!--
					For elements like `auro-icon` that do not have a default tab-to state,
					be sure to add `tabindex="0"` to the element when using `auro-popover`
					otherwise users of assistive technology will not see the content.
				-->
				<auro-icon category="in-flight" name="plug" slot="trigger" tabindex="0"></auro-icon>
			</Popover>
		</div>

		<h4 id="auro-popover-hyperlink">Remove Hyperlink Popover</h4>
		<div class="exampleWrapper">
			<Popover>
				This works, but not recommended
				<Hyperlink href="#" relative nav slot="trigger">hyperlink popover trigger</Hyperlink>
			</Popover>
		</div>

		<h4 id="auro-popover-hyperlink-button">Hyperlink Role Button Popover</h4>
		<div class="exampleWrapper">
			<Popover>
				Role button is recommended
				<Hyperlink role="button" slot="trigger">hyperlink, role button</Hyperlink>
			</Popover>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Radio</h2>
		<h4 id="auro-radio-default">Radio Default</h4>
		<div class="exampleWrapper">
			<Radio id="radio1" label="Yes" name="radioDemo" value="yes"></Radio>
		</div>

		<h4 id="auro-radio-default-group">Radio Default Group</h4>
		<div class="exampleWrapper">
			<auro-radio-group>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio28" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio29" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio30" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-disabled-group">Radio Disabled Group</h4>
		<div class="exampleWrapper">
			<auro-radio-group disabled>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio13" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio14" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio15" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-disabled-single">Radio Disabled Single</h4>
		<div class="exampleWrapper">
			<auro-radio-group>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio10" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio11" label="No" name="radioDemo" value="no" disabled></Radio>
				<Radio id="radio12" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-error">Radio Error</h4>
		<div class="exampleWrapper">
			<auro-radio-group error="There is an error with this form entry">
				<span slot="legend">Form label goes here</span>
				<Radio id="radio19" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio20" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio21" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>

		<h4 id="auro-radio-horizontal-group">Radio Horizontal Group</h4>
		<div class="exampleWrapper">
			<auro-radio-group horizontal>
				<span slot="legend">Form label goes here</span>
				<Radio id="radio22" label="Yes" name="radioDemo" value="yes"></Radio>
				<Radio id="radio23" label="No" name="radioDemo" value="no"></Radio>
				<Radio id="radio24" label="Maybe" name="radioDemo" value="maybe"></Radio>
			</auro-radio-group>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Select</h2>
		<h4 id="auro-select-default">Default</h4>
		<div class="exampleWrapper">
			<Select>
				<Menu>
					<auro-menuoption value="stops">Stops</auro-menuoption>
					<auro-menuoption value="price">Price</auro-menuoption>
					<auro-menuoption value="duration">Duration</auro-menuoption>
					<auro-menuoption value="departure">Departure</auro-menuoption>
					<auro-menuoption value="arrival">Arrival</auro-menuoption>
					<auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
				</Menu>
			</Select>
		</div>

		<h4 id="auro-select-icons">Example with auro-icons in options</h4>
		<div class="exampleWrapper">
			<Select>
				<Menu>
					<auro-menuoption value="air">
						<auro-icon label customColor category="health" name="air">Air</auro-icon>
					</auro-menuoption>
					<auro-menuoption value="covidtest">
						<auro-icon label customColor category="health" name="covid-test">Covid Test</auro-icon>
					</auro-menuoption>
					<auro-menuoption value="health">
						<auro-icon label customColor category="health" name="health">Health</auro-icon>
					</auro-menuoption>
					<auro-menuoption value="mask">
						<auro-icon label customColor category="health" name="mask">Mask</auro-icon>
					</auro-menuoption>
					<auro-menuoption value="spraybottle">
						<auro-icon label customColor category="health" name="spraybottle">Spray Bottle</auro-icon>
					</auro-menuoption>
				</Menu>
			</Select>
		</div>

		<h4 id="auro-select-nested">Example with nested menus</h4>
		<div class="exampleWrapper">
			<Select>
				<Menu>
					<auro-menuoption value="stops">Stops</auro-menuoption>
					<auro-menuoption value="price">Price</auro-menuoption>
					<auro-menuoption value="duration">Duration</auro-menuoption>
					<hr>
					<Menu>
						<auro-menuoption value="apples">Apples</auro-menuoption>
						<auro-menuoption value="oranges">Oranges</auro-menuoption>
						<auro-menuoption value="pears">Pears</auro-menuoption>
						<auro-menuoption value="grapes">Grapes</auro-menuoption>
						<auro-menuoption value="kiwi">Kiwi</auro-menuoption>
						<hr>
						<Menu>
							<auro-menuoption value="person">Person</auro-menuoption>
							<auro-menuoption value="woman">Woman</auro-menuoption>
							<auro-menuoption value="man">Man</auro-menuoption>
							<auro-menuoption value="camera">Camera</auro-menuoption>
							<auro-menuoption value="tv">TV</auro-menuoption>
						</Menu>
					</Menu>
					<hr>
					<auro-menuoption value="departure">Departure</auro-menuoption>
					<auro-menuoption value="arrival">Arrival</auro-menuoption>
					<hr>
					<Menu>
						<auro-menuoption value="cars">Cars</auro-menuoption>
						<auro-menuoption value="trucks">Trucks</auro-menuoption>
						<auro-menuoption value="boats">Boats</auro-menuoption>
						<auro-menuoption value="planes">Planes</auro-menuoption>
						<auro-menuoption value="motorcycles">Motorcycles</auro-menuoption>
					</Menu>
				</Menu>
			</Select>
		</div>

		<h4 id="auro-select-not-checkmark">Example with no checkmark</h4>
		<div class="exampleWrapper">
			<Select nocheckmark>
				<Menu>
					<auro-menuoption value="stops">Stops</auro-menuoption>
					<auro-menuoption value="price">Price</auro-menuoption>
					<auro-menuoption value="duration">Duration</auro-menuoption>
					<auro-menuoption value="departure">Departure</auro-menuoption>
					<auro-menuoption value="arrival">Arrival</auro-menuoption>
					<auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
				</Menu>
			</Select>
		</div>

		<h4 id="auro-select-label-text-slots">Label and help text slots</h4>
		<div class="exampleWrapper">
			<Select>
				<span slot="label">Please choose a preference</span>
				<span slot="helpText">Preferences are maintained for future use</span>
				<Menu>
					<auro-menuoption value="stops">Stops</auro-menuoption>
					<auro-menuoption value="price">Price</auro-menuoption>
					<auro-menuoption value="duration">Duration</auro-menuoption>
					<auro-menuoption value="departure">Departure</auro-menuoption>
					<auro-menuoption value="arrival">Arrival</auro-menuoption>
					<auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
				</Menu>
			</Select>
		</div>

		<h4 id="auro-select-error">Horizontal Group</h4>
		<div class="exampleWrapper">
			<Select error="Custom error message">
				<Menu>
					<auro-menuoption value="stops">Stops</auro-menuoption>
					<auro-menuoption value="price">Price</auro-menuoption>
					<auro-menuoption value="duration">Duration</auro-menuoption>
					<auro-menuoption value="departure">Departure</auro-menuoption>
					<auro-menuoption value="arrival">Arrival</auro-menuoption>
					<auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
				</Menu>
			</Select>
		</div>

		<h4 id="auro-select-disabled">Disabled state</h4>
		<div class="exampleWrapper">
			<Select disabled>
				<Menu>
					<auro-menuoption value="stops">Stops</auro-menuoption>
					<auro-menuoption value="price">Price</auro-menuoption>
					<auro-menuoption value="duration">Duration</auro-menuoption>
					<auro-menuoption value="departure">Departure</auro-menuoption>
					<auro-menuoption value="arrival">Arrival</auro-menuoption>
					<auro-menuoption value="prefer alaska">Prefer Alaska</auro-menuoption>
				</Menu>
			</Select>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Skeleton</h2>
		<h4 id="auro-skeleton-circle">Circle</h4>
		<div class="exampleWrapper">
			<Skeleton shape="circle" style="width: 40px; height: 40px"></Skeleton>
			<Skeleton shape="circle" style="width: 100px; height: 100px"></Skeleton>
			<Skeleton shape="circle" style="width: 300px; height: 300px"></Skeleton>
		</div>

		<h4 id="auro-skeleton-oval">Oval</h4>
		<div class="exampleWrapper">
			<Skeleton shape="oval" style="width: 80px; height: 40px"></Skeleton>
			<Skeleton shape="oval" style="width: 200px; height: 100px"></Skeleton>
			<Skeleton shape="oval" style="width: 600px; height: 300px"></Skeleton>
		</div>

		<h4 id="auro-skeleton-rectangle">Rectangle</h4>
		<div class="exampleWrapper">
			<Skeleton shape="rectangle" style="width: 100px; height: 50px"></Skeleton>
			<Skeleton shape="rectangle" style="width: 400px; height: 150px"></Skeleton>
			<Skeleton shape="rectangle" style="width: 800px; height: 300px"></Skeleton>
		</div>

		<h4 id="auro-skeleton-table">Table</h4>
			<div class="exampleWrapper">
				<table class="auro_table">
					<thead>
						<tr>
							<th>The table header</th>
							<th>The table header</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="2">
								<Skeleton shape="oval" style="height: 20px;"></Skeleton>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<Skeleton shape="oval" style="height: 20px;"></Skeleton>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<Skeleton shape="oval" style="height: 20px;"></Skeleton>
							</td>
						</tr>
					</tbody>
			</table>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Sidenav</h2>
		<h4 id="auro-sidenav">Default</h4>
		<div class="exampleWrapper">
			<Sidenav>
				<span slot="heading">Pet travel policies</span>
				<auro-sidenavitem href="/content/travel-info/pets">Pet travel overview</auro-sidenavitem>
				<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-cabin">Pets in cabin</auro-sidenavitem>
				<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-baggage-compartment">Pets in baggage compartment</auro-sidenavitem>
				<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-hawaii">Traveling to Hawaii</auro-sidenavitem>
				<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-international" target="_blank">International travel with pets</auro-sidenavitem>
				<auro-sidenavsection>
					<span slot="trigger">FAQ</span>
					<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#safe-to-fly">Is it safe to fly with my pet?</auro-sidenavitem>
					<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#certain-breeds-prohibited">Why are certain breeds prohibited from flying in the cargo compartment?</auro-sidenavitem>
					<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#dog-info" target="_blank">Dogs</auro-sidenavitem>
					<auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#cat-info" target="_blank">Cats</auro-sidenavitem>
				</auro-sidenavsection>
			</Sidenav>
		</div>
	</section>

	<section class="component-container">
		<h2>Auro Table</h2>
		<h4 id="auro-table">Basic Table</h4>
		<div class="exampleWrapper">
			<Table nowrap columnHeaders={basicTableData.headers} componentData={basicTableData.data}>
			</Table>
		</div>
	</section>

</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.component-container {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.component-container:not(:first-of-type)::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    display: block;
    clear: both;
    background-color: black;
	}

	.exampleWrapper--flex {
		display: flex;
		justify-content: space-between;
	}

	.anchorNavContentContainer {
		max-height: 200px;
		overflow-y: auto;
		background: white;
		border: solid 1px;
		position: relative;
		padding: 10px;
	}
</style>
