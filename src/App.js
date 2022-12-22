import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import ProductsDashboard from "./screens/ProductsDashboard";
import NewProduct from "./screens/NewProduct";
import Drafts from "./screens/Drafts";
import Released from "./screens/Released";
import Comments from "./screens/Comments";
import Scheduled from "./screens/Scheduled";
import Customers from "./screens/Customers";
import CustomerList from "./screens/CustomerList";
import Promote from "./screens/Promote";
import Notification from "./screens/Notification";
import Settings from "./screens/Settings";
import UpgradeToPro from "./screens/UpgradeToPro";
import MessageCenter from "./screens/MessageCenter";
import ExploreCreators from "./screens/ExploreCreators";
import AffiliateCenter from "./screens/AffiliateCenter";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Earning from "./screens/Earning";
import Refunds from "./screens/Refunds";
import Payouts from "./screens/Payouts";
import Statements from "./screens/Statements";
import Shop from "./screens/Shop";
import PageList from "./screens/PageList";

export default function App() {
	return (
		<Router>
			<Routes>
      <Route
					path='/'
					element={
						<Page title='Home'>
							<Home />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Home'>
								<Home />
							</Page>
						}
						path='/'
					/>
				</Route> */}

				<Route
					path='/products/dashboard'
					element={
						<Page title='Products dashboard'>
							<ProductsDashboard />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Products dashboard'>
								<ProductsDashboard />
							</Page>
						}
						path='/products/dashboard'
					/>
				</Route> */}

				<Route
					path='/products/add'
					element={
						<Page title='New product'>
							<NewProduct />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='New product'>
								<NewProduct />
							</Page>
						}
						path='/products/add'
					/>
				</Route> */}

				<Route
					path='/products/drafts'
					element={
						<Page title='Drafts'>
							<Drafts />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Drafts'>
								<Drafts />
							</Page>
						}
						path='/products/drafts'
					/>
				</Route> */}

				<Route
					path='/products/released'
					element={
						<Page title='Released'>
							<Released />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Released'>
								<Released />
							</Page>
						}
						path='/products/released'
					/>
				</Route> */}

				<Route
					path='/products/comments'
					element={
						<Page title='Comments'>
							<Comments />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Comments'>
								<Comments />
							</Page>
						}
						path='/products/comments'
					/>
				</Route> */}

				<Route
					path='/products/scheduled'
					element={
						<Page title='Scheduled'>
							<Scheduled />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Scheduled'>
								<Scheduled />
							</Page>
						}
						path='/products/scheduled'
					/>
				</Route> */}

				<Route
					path='/users/overview'
					element={
						<Page title='Users'>
							<Customers />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Users'>
								<Users />
							</Page>
						}
						path='/users/overview'
					/>
				</Route> */}

				<Route
					path='/users/user-list'
					element={
						<Page title='User list'>
							<CustomerList />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='User list'>
								<UserList />
							</Page>
						}
						path='/users/user-list'
					/>
				</Route> */}

				<Route
					path='/shop'
					element={
						<Page wide>
							<Shop />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Shop'>
								<Shop />
							</Page>
						}
						path='/shop'
					/>
				</Route> */}

				<Route
					path='/income/earning'
					element={
						<Page title='Earning'>
							<Earning />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Earning'>
								<Earning />
							</Page>
						}
						path='/income/earning'
					/>
				</Route> */}

				<Route
					path='/income/refunds'
					element={
						<Page title='Refunds'>
							<Refunds />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Refunds'>
								<Refunds />
							</Page>
						}
						path='/income/refunds'
					/>
				</Route> */}

				<Route
					path='/income/payouts'
					element={
						<Page title='Payouts'>
							<Payouts />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Payouts'>
								<Payouts />
							</Page>
						}
						path='/income/payouts'
					/>
				</Route> */}

				<Route
					path='/income/statements'
					element={
						<Page title='Statements'>
							<Statements />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Statements'>
								<Statements />
							</Page>
						}
						path='/income/statements'
					/>
				</Route> */}

				<Route
					path='/promote'
					element={
						<Page title='Promote'>
							<Promote />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Drafts'>
								<Drafts />
							</Page>
						}
						path='/products/drafts'
					/>
				</Route> */}

				<Route
					path='/notification'
					element={
						<Page title='Notification'>
							<Notification />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Notfication'>
								<Notification />
							</Page>
						}
						path='/notification'
					/>
				</Route> */}

				<Route
					path='/settings'
					element={
						<Page title='Settings'>
							<Settings />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Settings'>
								<Settings />
							</Page>
						}
						path='/settings'
					/>
				</Route> */}

				<Route
					path='/upgrade-to-pro'
					element={
						<Page title='Upgrade to Pro'>
							<UpgradeToPro />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Upgrade to Pro'>
								<UpgradeToPro />
							</Page>
						}
						path='/upgrade-to-pro'
					/>
				</Route> */}

				<Route
					path='/message-center'
					element={
						<Page title='Message center'>
							<MessageCenter />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Message center'>
								<MessageCenter />
							</Page>
						}
						path='/message-center'
					/>
				</Route> */}

				<Route
					path='/explore-creators'
					element={
						<Page title='Explore creators'>
							<ExploreCreators />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Explore creators'>
								<ExploreCreators />
							</Page>
						}
						path='/explore-creators'
					/>
				</Route> */}

				<Route
					path='/affiliate-center'
					element={
						<Page title='Affiliate center'>
							<AffiliateCenter />
						</Page>
					}
				/>
				{/* <Route element={<ProtectedRoutes />}>
					<Route
						element={
							<Page title='Affiliate center'>
								<AffiliateCenter />
							</Page>
						}
						path='/affiliate-center'
					/>
				</Route> */}

				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/pagelist' element={<PageList />} />
			</Routes>
		</Router>
	)
}

