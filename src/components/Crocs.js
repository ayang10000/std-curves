import React from 'react'
import { useColorMode } from 'theme-ui'

function Crocs(props) {
	const [colorMode] = useColorMode();
	const fill = (colorMode === 'light' ? "black" : "white");
	return (
		<div>
			<style>{`\
				#crocs:hover path {\
				fill: #E71D36 !important;\
				}\
			`}</style>
			<svg id="crocs" version="1.1" viewBox="0 0 100 47"
				{...props}>
			<defs id="defs913"/>
			<g id="Layer_x0020_1" fill={fill}>
			<path id="path916" d="M16.186 19.363a1.927 1.927 0 00-.085-.439.527.527 0 00-.213-.288.569.569 0 00-.296-.077c-.21 0-.472.116-.801.354-.287.208-.662.446-1.113.705a8.785 8.785 0 01-1.63.7c-.63.207-1.379.311-2.228.311-1 0-1.906-.18-2.694-.534a5.24 5.24 0 01-1.995-1.57c-.542-.693-.966-1.57-1.259-2.608-.293-1.044-.442-2.265-.442-3.628 0-1.375.154-2.612.46-3.678.302-1.06.735-1.971 1.286-2.706a5.448 5.448 0 011.979-1.662c.77-.375 1.636-.565 2.577-.565.869 0 1.623.108 2.24.32a8.7 8.7 0 011.596.713c.437.259.8.5 1.077.715.322.25.567.367.771.367.133 0 .249-.039.343-.116a.765.765 0 00.212-.306c.052-.123.09-.267.115-.443.024-.165.035-.367.035-.602 0-.208-.008-.391-.025-.545a3.064 3.064 0 00-.072-.406 1.38 1.38 0 00-.128-.323 2.04 2.04 0 00-.325-.384c-.163-.163-.442-.36-.853-.606a7.753 7.753 0 00-1.382-.636 12.017 12.017 0 00-1.68-.452 9.733 9.733 0 00-1.874-.18c-1.447 0-2.786.267-3.979.793A8.622 8.622 0 002.709 3.89c-.855 1-1.528 2.234-2 3.668C.24 8.99 0 10.64 0 12.464c0 1.778.222 3.374.659 4.743.438 1.374 1.075 2.547 1.892 3.485a7.97 7.97 0 002.988 2.143c1.16.48 2.475.723 3.91.723.83 0 1.606-.078 2.309-.231a11.372 11.372 0 001.87-.565 8.724 8.724 0 001.371-.688c.376-.24.617-.417.739-.538.124-.124.21-.23.265-.324a1.4 1.4 0 00.127-.312 2.08 2.08 0 00.065-.389c.012-.137.018-.301.018-.488 0-.268-.01-.484-.027-.66z"/>
			<path id="path918" d="M34.595 22.229c-.046-.17-.148-.455-.31-.87 0-.003-1.96-4.817-1.96-4.817a19.18 19.18 0 00-.682-1.5 8.269 8.269 0 00-.734-1.192 5.284 5.284 0 00-.85-.9 4.246 4.246 0 00-.656-.436 8.55 8.55 0 001.398-.701 5.852 5.852 0 001.377-1.193c.384-.46.682-.995.886-1.593.202-.596.305-1.277.305-2.025 0-.77-.115-1.486-.34-2.126a5.036 5.036 0 00-1.026-1.724 5.518 5.518 0 00-1.684-1.24c-.66-.32-1.43-.558-2.288-.707a18.665 18.665 0 00-2.397-.138h-4.646c-.298 0-.581.101-.843.299-.277.21-.418.567-.418 1.063v20.228c0 .124.032.237.096.335.07.102.18.179.329.23.123.043.28.08.48.11.195.03.44.044.73.044.288 0 .533-.015.728-.044.202-.031.358-.067.476-.11a.681.681 0 00.318-.22.563.563 0 00.112-.346v-9.129h1.764c.637 0 1.188.095 1.637.282.449.187.843.452 1.174.788.335.34.629.752.873 1.224.251.487.496 1.025.728 1.598l2.01 5.15c.045.141.107.27.178.375a.79.79 0 00.337.273c.129.058.292.099.5.124.192.023.441.035.74.035.34 0 .62-.012.83-.035.22-.025.39-.062.52-.113.153-.06.258-.147.313-.254a.71.71 0 00.07-.318 1.7 1.7 0 00-.075-.427zM29.69 8.709a2.869 2.869 0 01-.773 1.106c-.352.315-.8.564-1.33.741-.537.18-1.187.27-1.93.27h-2.66V3.815h2.271c.566 0 1.03.016 1.378.05.343.032.653.087.923.163.853.245 1.468.65 1.825 1.2.362.56.546 1.258.546 2.075 0 .505-.085.978-.25 1.406z"/>
			<path id="path920" d="M84.018 19.364a1.877 1.877 0 00-.086-.44.52.52 0 00-.213-.288.567.567 0 00-.295-.077c-.21 0-.473.116-.801.354-.286.207-.66.445-1.113.705a8.808 8.808 0 01-1.63.7c-.63.207-1.38.311-2.228.311-1 0-1.906-.18-2.694-.534a5.238 5.238 0 01-1.995-1.57c-.543-.693-.967-1.571-1.258-2.608-.294-1.043-.443-2.264-.443-3.628 0-1.375.154-2.613.459-3.678.304-1.062.737-1.972 1.286-2.706a5.46 5.46 0 011.98-1.662c.77-.375 1.636-.565 2.577-.565.869 0 1.623.108 2.24.32a8.713 8.713 0 011.596.713c.438.26.8.5 1.076.715.323.25.568.367.772.367.133 0 .248-.039.343-.116a.767.767 0 00.213-.306 1.8 1.8 0 00.114-.443c.024-.166.036-.369.036-.602 0-.207-.01-.39-.027-.545a3.009 3.009 0 00-.072-.407 1.371 1.371 0 00-.127-.322 2.09 2.09 0 00-.325-.384c-.165-.164-.444-.362-.853-.606a7.745 7.745 0 00-1.382-.636 11.981 11.981 0 00-1.68-.452 9.728 9.728 0 00-1.873-.18c-1.448 0-2.787.267-3.98.793a8.617 8.617 0 00-3.093 2.303c-.856 1-1.529 2.234-2 3.668-.471 1.43-.71 3.081-.71 4.906 0 1.78.222 3.375.659 4.743.438 1.374 1.075 2.547 1.892 3.485a7.965 7.965 0 002.988 2.143c1.159.48 2.475.723 3.91.723.829 0 1.606-.078 2.308-.231a11.368 11.368 0 001.87-.565 8.698 8.698 0 001.372-.688c.375-.24.617-.416.739-.538.126-.126.212-.233.265-.325.052-.092.095-.197.127-.311.03-.111.052-.241.065-.388.011-.14.018-.304.018-.489 0-.268-.01-.484-.027-.66z"/>
			<path id="path922" d="M99.554 14.644a5.74 5.74 0 00-1.168-1.707 7.815 7.815 0 00-1.632-1.245c-.6-.346-1.218-.666-1.836-.953l-1.822-.853a9.896 9.896 0 01-1.567-.911 4.15 4.15 0 01-1.076-1.117c-.261-.408-.393-.904-.393-1.474 0-.393.07-.77.206-1.118.136-.346.343-.648.614-.898.274-.254.63-.46 1.054-.615.428-.155.942-.234 1.526-.234.631 0 1.207.08 1.71.236.514.159.961.336 1.331.526.388.2.703.37.96.524.3.178.514.26.675.26a.5.5 0 00.325-.116.664.664 0 00.2-.322c.038-.12.065-.26.084-.433a6.707 6.707 0 00.009-1.102 2.684 2.684 0 00-.055-.372 1.132 1.132 0 00-.101-.282 1.378 1.378 0 00-.242-.294c-.122-.12-.355-.267-.712-.45a7.995 7.995 0 00-1.184-.477c-.44-.141-.914-.256-1.41-.34-.498-.085-1-.128-1.49-.128-.958 0-1.866.13-2.696.388-.835.26-1.565.643-2.171 1.14a5.222 5.222 0 00-1.434 1.861c-.342.736-.515 1.582-.515 2.516 0 .911.15 1.706.446 2.362.294.653.683 1.23 1.157 1.715a7.86 7.86 0 001.605 1.261c.587.351 1.2.675 1.82.963l1.813.845a9.62 9.62 0 011.548.895c.44.317.8.69 1.067 1.108.26.408.393.91.393 1.49 0 .548-.097 1.04-.288 1.466-.19.423-.466.785-.819 1.075a3.916 3.916 0 01-1.291.687 5.447 5.447 0 01-1.675.245c-.811 0-1.534-.097-2.149-.288a10.304 10.304 0 01-2.688-1.237c-.32-.214-.57-.318-.766-.318a.64.64 0 00-.326.084.617.617 0 00-.242.293 1.65 1.65 0 00-.115.446 4.705 4.705 0 00-.036.64c0 .365.034.664.1.888.07.236.18.434.33.589.142.147.381.318.732.52.338.194.762.386 1.261.57.493.18 1.064.336 1.698.462.635.125 1.331.188 2.07.188 1.06 0 2.065-.144 2.984-.43a7.013 7.013 0 002.426-1.291 6.082 6.082 0 001.618-2.097c.387-.82.583-1.766.583-2.812 0-.888-.15-1.672-.446-2.329z"/>
			<path id="path924" d="M47.09 12.463a3.324 3.324 0 013.317-3.377 3.323 3.323 0 013.377 3.318c.016 1.869-1.45 3.437-3.317 3.455-1.868.016-3.36-1.527-3.376-3.396z"/>
			<path id="path926" d="M54.593 20.803c-.363.18-.635.493-.765.878s-.1.797.081 1.162a1.517 1.517 0 002.04.683c4.276-2.127 6.909-6.417 6.866-11.19l-.027-.723a1.521 1.521 0 00-3.036.195l.02.553a9.278 9.278 0 01-5.179 8.442zM45.155 4.754a9.264 9.264 0 015.205-1.639 9.28 9.28 0 015.173 1.508c.34.222.748.298 1.146.214a1.523 1.523 0 00.517-2.762A12.318 12.318 0 0050.333.07c-2.482.023-4.87.774-6.904 2.177a1.522 1.522 0 001.726 2.506zm-.031 18.866c.367.174.78.196 1.163.06.382-.137.69-.412.864-.78.176-.365.197-.778.061-1.162a1.517 1.517 0 00-.779-.866 9.278 9.278 0 01-5.322-8.346l.01-.55c.02-.404-.12-.794-.395-1.094a1.506 1.506 0 00-1.054-.496c-.405-.02-.794.121-1.094.394-.3.274-.477.65-.495 1.056l-.015.718c.042 4.771 2.745 9.011 7.056 11.065z"/>
			<g id="_129163040" fill={fill}>
				<path d="M33.06 37.897c-.212.109-.678.225-1.267.225-1.558 0-2.504-.982-2.504-2.475 0-1.615 1.12-2.59 2.62-2.59.59 0 1.012.123 1.194.217l-.197.714a2.389 2.389 0 00-.96-.19c-.998 0-1.718.627-1.718 1.806 0 1.077.633 1.769 1.71 1.769.364 0 .743-.073.975-.182l.146.706z"  id="_129163088" />
				<path d="M34.304 36.521c.022.64.524.917 1.092.917.414 0 .713-.058.982-.16l.131.619a3.322 3.322 0 01-1.237.225c-1.15 0-1.827-.713-1.827-1.797 0-.983.597-1.908 1.732-1.908 1.157 0 1.529.946 1.529 1.725 0 .168-.015.299-.03.379h-2.372zm1.557-.626c.008-.328-.138-.866-.735-.866-.553 0-.786.502-.822.866h1.557z"  id="_129162920" />
				<path d="M37.426 35.553c0-.408-.007-.75-.029-1.056h.786l.044.532h.022c.153-.277.538-.612 1.128-.612.619 0 1.26.4 1.26 1.522v2.103h-.896v-2.001c0-.51-.19-.896-.677-.896-.357 0-.604.255-.699.524a.91.91 0 00-.036.292v2.081h-.903v-2.49z"  id="_129162872" />
				<path d="M42.58 33.587v.91h.851v.67h-.851v1.565c0 .43.116.655.459.655a1.1 1.1 0 00.349-.044l.014.684c-.13.051-.364.095-.647.095-.328 0-.605-.116-.772-.298-.19-.204-.277-.524-.277-.99v-1.667h-.51v-.67h.51v-.655l.874-.255z"  id="_124347800" />
				<path d="M44.108 35.64c0-.48-.007-.822-.029-1.143h.78l.028.677h.03c.174-.502.589-.757.968-.757.087 0 .138.008.21.022v.845a1.246 1.246 0 00-.261-.03c-.43 0-.721.277-.801.677a1.52 1.52 0 00-.03.277v1.834h-.895V35.64z"  id="_124346000" />
				<path d="M47.267 36.521c.022.64.524.917 1.092.917.415 0 .713-.058.983-.16l.13.619a3.323 3.323 0 01-1.237.225c-1.15 0-1.827-.713-1.827-1.797 0-.983.597-1.908 1.733-1.908 1.157 0 1.528.946 1.528 1.725 0 .168-.014.299-.029.379h-2.373zm1.558-.626c.007-.328-.138-.866-.735-.866-.554 0-.787.502-.823.866h1.558z"  id="_124346240" />
				<path d="M51.998 38.042v-2.875h-.48v-.67h.48v-.153c0-.458.124-.917.43-1.208.262-.247.618-.342.924-.342.24 0 .43.037.575.088l-.065.691a1.046 1.046 0 00-.38-.065c-.443 0-.596.37-.596.807v.182h.78v.67h-.773v2.875h-.895z"  id="_124346336" />
				<path d="M57.508 36.237c0 1.303-.917 1.885-1.82 1.885-1.004 0-1.776-.692-1.776-1.827 0-1.165.765-1.878 1.835-1.878 1.055 0 1.761.743 1.761 1.82zm-2.671.037c0 .684.335 1.2.88 1.2.51 0 .867-.502.867-1.215 0-.553-.248-1.186-.86-1.186-.633 0-.887.61-.887 1.2z"  id="_124346408" />
				<path d="M58.243 35.64c0-.48-.007-.822-.029-1.143h.779l.029.677h.03c.174-.502.589-.757.967-.757.087 0 .139.008.211.022v.845a1.246 1.246 0 00-.262-.03c-.43 0-.72.277-.8.677a1.52 1.52 0 00-.03.277v1.834h-.895V35.64z"  id="_124346480" />
				<path d="M62.377 33.202a8.456 8.456 0 011.354-.102c.706 0 1.186.116 1.514.393.27.226.422.567.422.983 0 .633-.43 1.062-.888 1.23v.022c.35.13.56.473.684.946.153.611.284 1.179.386 1.368h-.924c-.073-.145-.19-.546-.328-1.157-.138-.64-.37-.844-.88-.86h-.452v2.017h-.888v-4.84zm.888 2.169h.531c.605 0 .983-.32.983-.808 0-.539-.378-.786-.96-.786-.285 0-.467.022-.554.044v1.55z"  id="_124346552" />
				<path d="M67.137 36.521c.022.64.524.917 1.092.917.415 0 .713-.058.983-.16l.13.619a3.323 3.323 0 01-1.237.225c-1.15 0-1.827-.713-1.827-1.797 0-.983.597-1.908 1.733-1.908 1.157 0 1.528.946 1.528 1.725 0 .168-.014.299-.03.379h-2.372zm1.558-.626c.007-.328-.138-.866-.735-.866-.554 0-.787.502-.823.866h1.558z"  id="_124346624" />
				<path d="M70.216 37.22c.204.123.59.255.91.255.393 0 .568-.161.568-.394 0-.24-.146-.364-.583-.517-.691-.24-.982-.618-.975-1.033 0-.626.517-1.114 1.34-1.114.392 0 .734.102.938.211l-.175.634a1.592 1.592 0 00-.75-.204c-.32 0-.494.153-.494.37 0 .227.167.336.618.496.64.233.94.56.947 1.085 0 .64-.503 1.113-1.441 1.113-.43 0-.816-.109-1.078-.255l.175-.647z"  id="_124346648" />
				<path d="M73.928 36.521c.022.64.524.917 1.092.917.415 0 .713-.058.982-.16l.131.619a3.323 3.323 0 01-1.237.225c-1.15 0-1.827-.713-1.827-1.797 0-.983.597-1.908 1.732-1.908 1.158 0 1.529.946 1.529 1.725 0 .168-.014.299-.03.379h-2.372zm1.558-.626c.007-.328-.138-.866-.736-.866-.553 0-.786.502-.822.866h1.558z"  id="_107160824" />
				<path d="M79.802 37.19c0 .32.014.634.05.852h-.807l-.058-.393h-.022c-.219.277-.59.473-1.048.473-.714 0-1.114-.517-1.114-1.055 0-.895.793-1.347 2.104-1.34v-.058c0-.233-.095-.618-.721-.618-.35 0-.713.109-.953.261l-.175-.582c.262-.16.72-.313 1.28-.313 1.136 0 1.464.721 1.464 1.492v1.282zm-.874-.88c-.633-.015-1.237.124-1.237.662 0 .35.226.51.51.51a.725.725 0 00.698-.488.65.65 0 00.03-.197v-.487z"  id="_129073072" />
				<path d="M80.748 35.64c0-.48-.007-.822-.029-1.143h.779l.029.677h.03c.174-.502.589-.757.967-.757.088 0 .138.008.211.022v.845a1.247 1.247 0 00-.262-.03c-.43 0-.72.277-.8.677a1.52 1.52 0 00-.03.277v1.834h-.895V35.64z"  id="_129073168" />
				<path d="M85.88 37.933c-.19.087-.561.19-1.005.19-1.106 0-1.827-.714-1.827-1.813 0-1.063.728-1.893 1.973-1.893.327 0 .662.073.866.168l-.16.67a1.578 1.578 0 00-.677-.139c-.684 0-1.092.502-1.085 1.15 0 .728.473 1.143 1.085 1.143.313 0 .531-.066.706-.138l.124.662z"  id="_129073264" />
				<path d="M86.542 32.874h.902v2.111h.015c.109-.167.262-.313.444-.408.174-.101.386-.16.611-.16.605 0 1.238.4 1.238 1.536v2.09h-.896v-1.988c0-.517-.189-.902-.684-.902a.73.73 0 00-.728.771v2.118h-.902v-5.168z"  id="_129073400" />
				<path d="M95.582 36.237c0 1.303-.917 1.885-1.82 1.885-1.004 0-1.776-.692-1.776-1.827 0-1.165.764-1.878 1.834-1.878 1.056 0 1.762.743 1.762 1.82zm-2.671.037c0 .684.334 1.2.88 1.2.51 0 .866-.502.866-1.215 0-.553-.247-1.186-.859-1.186-.633 0-.887.61-.887 1.2z"  id="_129073496" />
				<path d="M96.317 35.553c0-.408-.007-.75-.03-1.056h.787l.044.532h.021c.153-.277.539-.612 1.129-.612.618 0 1.259.4 1.259 1.522v2.103h-.896v-2.001c0-.51-.189-.896-.676-.896-.357 0-.604.255-.7.524a.907.907 0 00-.036.292v2.081h-.902v-2.49z"  id="_129073592" />
				<path d="M19.412 45.175c-.211.11-.677.226-1.267.226-1.558 0-2.504-.983-2.504-2.475 0-1.616 1.121-2.591 2.62-2.591.59 0 1.012.124 1.195.218l-.197.713a2.388 2.388 0 00-.961-.188c-.997 0-1.718.625-1.718 1.804 0 1.078.633 1.77 1.71 1.77.365 0 .743-.074.976-.183l.146.706z"  id="_129073688" />
				<path d="M20.118 42.919c0-.48-.007-.822-.03-1.143h.78l.029.677h.029c.175-.502.59-.757.968-.757.087 0 .138.007.21.022v.844a1.245 1.245 0 00-.261-.029c-.43 0-.72.277-.8.677-.015.08-.03.175-.03.276v1.835h-.895v-2.402z"  id="_129073784" />
				<path d="M23.43 41.776l.64 1.9c.072.218.145.488.196.691h.022c.058-.203.124-.466.19-.699l.552-1.892h.961l-.888 2.416c-.488 1.325-.815 1.915-1.237 2.279-.35.313-.714.43-.94.458l-.203-.757c.153-.036.342-.116.524-.247a1.56 1.56 0 00.488-.56.363.363 0 00.058-.16.38.38 0 00-.05-.175l-1.296-3.254h.982z"  id="_129073880" />
				<path d="M26.508 42.955c0-.466-.014-.844-.029-1.179h.786l.044.546h.014c.262-.4.677-.626 1.216-.626.815 0 1.492.699 1.492 1.805 0 1.281-.808 1.9-1.616 1.9-.444 0-.815-.19-.997-.473h-.015v1.834h-.895v-3.807zm.895.881c0 .087.007.167.03.248a.81.81 0 00.785.625c.568 0 .903-.473.903-1.172 0-.625-.306-1.135-.88-1.135a.834.834 0 00-.801.663.801.801 0 00-.037.225v.546z"  id="_129073976" />
				<path d="M31.792 40.866v.91h.852v.67h-.852v1.565c0 .429.117.655.46.655.166 0 .247-.015.349-.044l.014.684c-.13.051-.364.095-.648.095-.327 0-.604-.116-.771-.299-.19-.203-.277-.524-.277-.99v-1.666h-.51v-.67h.51v-.655l.873-.255z"  id="_129074072" />
				<path d="M36.648 43.516c0 1.303-.917 1.885-1.82 1.885-1.004 0-1.776-.692-1.776-1.827 0-1.165.764-1.878 1.834-1.878 1.056 0 1.762.742 1.762 1.82zm-2.672.036c0 .684.335 1.201.881 1.201.51 0 .866-.502.866-1.216 0-.553-.247-1.186-.859-1.186-.633 0-.887.612-.887 1.201z"  id="_129074168" />
				<path d="M40.593 44.804c0 .743-.153 1.274-.524 1.609-.371.327-.881.429-1.368.429-.452 0-.932-.095-1.238-.284l.196-.677c.226.131.605.27 1.034.27.582 0 1.019-.306 1.019-1.07v-.306h-.014c-.204.313-.568.524-1.034.524-.881 0-1.507-.728-1.507-1.732 0-1.165.757-1.87 1.609-1.87.538 0 .859.261 1.026.552h.015l.036-.473h.779c-.015.24-.03.531-.03 1.02v2.008zm-.896-1.609a.876.876 0 00-.029-.24c-.094-.327-.35-.575-.727-.575-.503 0-.874.437-.874 1.157 0 .605.306 1.092.866 1.092a.764.764 0 00.728-.538c.022-.095.036-.219.036-.32v-.575z"  id="_129074264" />
				<path d="M41.524 42.919c0-.48-.007-.822-.029-1.143h.78l.028.677h.03c.174-.502.589-.757.967-.757.087 0 .138.007.211.022v.844a1.244 1.244 0 00-.262-.029c-.43 0-.72.277-.8.677-.015.08-.03.175-.03.276v1.835h-.895v-2.402z"  id="_129074360" />
				<path d="M46.801 44.47c0 .32.015.632.051.85h-.808l-.058-.392h-.022c-.218.276-.59.473-1.048.473-.713 0-1.114-.517-1.114-1.056 0-.895.794-1.346 2.104-1.339v-.058c0-.233-.095-.619-.72-.619-.35 0-.714.11-.954.262l-.175-.582c.262-.16.72-.313 1.281-.313 1.136 0 1.463.72 1.463 1.492v1.281zm-.873-.882c-.634-.014-1.238.124-1.238.663 0 .35.226.51.51.51a.725.725 0 00.699-.489.647.647 0 00.029-.196v-.488z"  id="_129074456" />
				<path d="M47.747 42.955c0-.466-.014-.844-.029-1.179h.786l.044.546h.015c.262-.4.677-.626 1.215-.626.815 0 1.492.699 1.492 1.805 0 1.281-.808 1.9-1.616 1.9-.444 0-.815-.19-.997-.473h-.014v1.834h-.896v-3.807zm.896.881c0 .087.007.167.029.248a.81.81 0 00.786.625c.567 0 .902-.473.902-1.172 0-.625-.305-1.135-.88-1.135a.834.834 0 00-.8.663.798.798 0 00-.037.225v.546z"  id="_129074552" />
				<path d="M52.005 40.153h.903v2.111h.015c.109-.168.262-.313.443-.408.175-.102.386-.16.612-.16.604 0 1.237.4 1.237 1.536v2.089h-.895v-1.987c0-.517-.189-.903-.684-.903a.73.73 0 00-.728.772v2.118h-.903v-5.168z"  id="_129074648" />
				<path d="M56.613 41.776l.64 1.9c.073.218.146.488.197.691h.022c.058-.203.124-.466.19-.699l.552-1.892h.96l-.887 2.416c-.488 1.325-.815 1.915-1.237 2.279-.35.313-.714.43-.94.458l-.203-.757c.153-.036.342-.116.524-.247a1.56 1.56 0 00.488-.56.362.362 0 00.058-.16.38.38 0 00-.051-.175l-1.296-3.254h.983z"  id="_129074744" />
				<path d="M63.95 44.47c0 .32.014.632.05.85h-.807l-.059-.392h-.021c-.219.276-.59.473-1.048.473-.714 0-1.114-.517-1.114-1.056 0-.895.793-1.346 2.103-1.339v-.058c0-.233-.094-.619-.72-.619-.35 0-.713.11-.954.262l-.174-.582c.262-.16.72-.313 1.28-.313 1.136 0 1.464.72 1.464 1.492v1.281zm-.874-.882c-.633-.014-1.237.124-1.237.663 0 .35.226.51.51.51a.725.725 0 00.698-.489.647.647 0 00.03-.196v-.488z"  id="_129074840" />
				<path d="M64.896 42.831c0-.407-.007-.75-.03-1.055h.787l.044.531h.021c.153-.276.539-.61 1.129-.61.618 0 1.259.4 1.259 1.52v2.104h-.895v-2.002c0-.51-.19-.895-.677-.895-.357 0-.604.255-.699.524a.904.904 0 00-.037.29v2.083h-.902v-2.49z"  id="_129074936" />
				<path d="M72.328 40.153v4.17c0 .365.014.758.028.998h-.8l-.036-.56h-.015c-.211.392-.64.64-1.157.64-.845 0-1.514-.72-1.514-1.813-.008-1.186.735-1.892 1.586-1.892.488 0 .837.204.998.466h.014v-2.01h.895zm-.896 3.1c0-.072-.007-.16-.022-.233-.08-.349-.364-.633-.771-.633-.575 0-.896.51-.896 1.172 0 .648.32 1.121.889 1.121a.79.79 0 00.771-.633c.022-.08.03-.167.03-.262v-.532z"  id="_129075032" />
				<path d="M74.81 44.346c.29.167.727.312 1.186.312.575 0 .895-.27.895-.67 0-.37-.248-.589-.874-.814-.807-.292-1.324-.721-1.324-1.427 0-.8.67-1.412 1.732-1.412.531 0 .924.116 1.18.247l-.22.72a2.08 2.08 0 00-.974-.232c-.568 0-.816.306-.816.59 0 .378.284.553.94.808.85.32 1.266.75 1.266 1.455 0 .786-.597 1.478-1.863 1.478-.518 0-1.056-.153-1.325-.313l.196-.743z"  id="_129075128" />
				<path d="M79.25 43.8c.021.64.523.917 1.091.917.415 0 .713-.059.983-.16l.13.618a3.314 3.314 0 01-1.236.226c-1.15 0-1.828-.713-1.828-1.798 0-.983.597-1.907 1.733-1.907 1.157 0 1.528.946 1.528 1.725 0 .167-.014.298-.029.379h-2.373zm1.557-.626c.007-.328-.138-.867-.735-.867-.554 0-.787.503-.823.866h1.558z"  id="_129075224" />
				<path d="M84.978 45.212c-.19.087-.561.19-1.005.19-1.106 0-1.827-.714-1.827-1.814 0-1.062.728-1.892 1.973-1.892.327 0 .662.073.866.167l-.16.67a1.58 1.58 0 00-.677-.138c-.684 0-1.092.502-1.085 1.15 0 .727.474 1.143 1.085 1.143.313 0 .531-.066.706-.139l.124.663z"  id="_129075320" />
				<path d="M88.813 44.258c0 .422.015.772.03 1.063h-.787l-.043-.539h-.015a1.282 1.282 0 01-1.135.62c-.648 0-1.238-.387-1.238-1.544v-2.082h.896v1.929c0 .59.189.968.662.968.357 0 .59-.255.684-.48a.817.817 0 00.05-.277v-2.14h.896v2.482z"  id="_129389816" />
				<path d="M89.781 42.919c0-.48-.007-.822-.029-1.143h.779l.029.677h.03c.174-.502.589-.757.967-.757.088 0 .139.007.211.022v.844a1.245 1.245 0 00-.262-.029c-.43 0-.72.277-.8.677-.015.08-.03.175-.03.276v1.835h-.895v-2.402z"  id="_129389912" />
				<path d="M93.326 40.786c0 .27-.197.48-.51.48-.298 0-.495-.21-.495-.48 0-.276.204-.488.502-.488.306 0 .496.212.503.488zm-.954 4.535v-3.545h.903v3.545h-.903z"  id="_129390008" />
				<path d="M95.262 40.866v.91h.851v.67h-.851v1.565c0 .429.117.655.459.655a1.1 1.1 0 00.35-.044l.013.684c-.13.051-.363.095-.647.095-.328 0-.604-.116-.772-.299-.189-.203-.277-.524-.277-.99v-1.666h-.509v-.67h.51v-.655l.873-.255z"  id="_129390104" />
				<path d="M97.402 41.776l.64 1.9c.073.218.146.488.197.691h.022c.058-.203.124-.466.19-.699l.552-1.892h.961l-.888 2.416c-.488 1.325-.815 1.915-1.237 2.279-.35.313-.714.43-.94.458l-.203-.757c.153-.036.342-.116.524-.247.167-.11.364-.32.488-.56a.363.363 0 00.058-.16.38.38 0 00-.05-.175l-1.297-3.254h.983z"  id="_129390200" />
			</g>
			</g>
		</svg>
  		</div>
	)
  }
export default Crocs