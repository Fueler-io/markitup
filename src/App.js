import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
	return (
		<div className="container-fluid main">
			{/* Header */}
			<header className="main-header my-3">
				<div className="main-header-background-image">
					<img src="https://s3.us-east-2.amazonaws.com/fueler.io-images/brands/tcc/header-banner.jfif" alt="" />
				</div>
				<div className="container">
					<div className="main-header-profile mb-4">

						<div className="row justify-content-center">
							<div className="col-md-11">
								<div className='d-flex justify-content-between align-items-end'>
									<div>
										<img className="rounded-circle mb-4" src="https://fueler.io/images/fueler/main/landing-page/communities/MarkitUp.png" alt="" />
									</div>
									<div>
										<a href="https://markitup.in/" id='website-button' className='btn primary-button px-3 fw-500'>Our Website</a>
									</div>
								</div>
								<h2 className='fw-bold primary-color'>MarkitUp</h2>
								<p className='text-gray fw-500'>We help brands grow by unleashing the potential of social media 🚀</p>

								<a href="https://www.theclueless.company/" target="_blank" rel="noopener noreferrer" id='website-button-botom' className='btn primary-button px-3 fw-500'>Explore Website</a>
							
							</div>
						</div>
						
					</div>
				</div>
			</header>


			<section className='main-body my-3'>

				<div className='container main-body-heading text-center py-3'>
					<h1 className='fw-bold primary-color'>Our Proof of Work Ideas</h1>
				</div>

				<div className="container">
					<div className="row justify-content-center py-4">
						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-pink px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149431/fueler-emoji/wgyvec0qmcjctujfslx7.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Come up with 3 thumbnail redesign of “<a href="https://www.youtube.com/c/joerogan/videos">Joe Rogan Experience</a>”</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Thumbnail Designing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-green px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149685/fueler-emoji/ftojrqu17nf5cjkm6ypb.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Pick one of the less-viewed Ishan YouTube videos and prepare documentation on how you can improve the thumbnail design.</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Thumbnail Designing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-teal px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/man-artist_1f468-200d-1f3a8.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Cut the intro part from a less-viewed Ishan YouTube video and edit it from your perspective </p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Editing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>


						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-peach px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/fire_1f525.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>Pick any of the Ishan videos with more than 70k views and cut out an Instagram reel from that </p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Editing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-blue px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Come up with 5 versions of Ishan’s current videos thumbnails
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Thumbnail Designing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card  card-pink px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Redesign the “<a href="https://www.youtube.com/playlist?list=PLOafE8LUCSuaJwBtQeuWxbKN8VGkvEppa">College Placement Series</a> ” video thumbnail s
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Thumbnail Designing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						{/* POW IDea 1 */}
						<div className="col-md-11 mb-4 pb-2">
							<div className="card card-teal px-3">
								<div className="card-body">
									<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
										<div className='d-flex justify-content-start flex-wrap align-items-center'>
											<div className='card-icon my-3 mr-2'>
												<img src="https://res.cloudinary.com/kiwismedia/image/upload/v1641149894/fueler-emoji/cvvhxbsssxjqy26ctcfe.png" alt="" />
											</div>
											<div className='card-content'>
												<p className='mb-0 text-basic fw-500'>
													Create 5 reals with “<a href="https://www.youtube.com/watch?v=mi6d_u5y0vM&ab_channel=IshanSharma">How He Built a 100 CRORE Business</a>” 
												</p>
											</div>
										</div>
										<div className='card-tag'>
											<div className='card-tag-button px-3 py-2'>
												Video Editing
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

			</section>


			<footer className='my-4'>
				<div className='text-center pb-5'>
					<h5 className='mb-0 py-4'>
						<a href="https://fueler.io">
							Powered by <span><img src="https://fueler.io/images/fueler/main/fueler_logo.svg" width={120} alt="" /></span>
						</a>
					</h5>
				</div>
			</footer>

		</div>
	);
}

export default App;
