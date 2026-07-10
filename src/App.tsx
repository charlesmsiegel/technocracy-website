import { HashRouter, Route, Routes } from 'react-router-dom'
import { SessionProvider } from './session/SessionContext'
import RequireClearance from './session/RequireClearance'
import PublicLayout from './layouts/PublicLayout'
import InternalLayout from './layouts/InternalLayout'
import Home from './pages/public/Home'
import Divisions from './pages/public/Divisions'
import DivisionDetail from './pages/public/DivisionDetail'
import Newsroom from './pages/public/Newsroom'
import PressReleaseDetail from './pages/public/PressReleaseDetail'
import Initiatives from './pages/public/Initiatives'
import Careers from './pages/public/Careers'
import About from './pages/public/About'
import Heritage from './pages/public/Heritage'
import Privacy from './pages/public/Privacy'
import Investors from './pages/public/Investors'
import Portfolio from './pages/public/Portfolio'
import Transparency from './pages/public/Transparency'
import Explained from './pages/public/Explained'
import Research from './pages/public/Research'
import ResearchPaper from './pages/public/ResearchPaper'
import Accessibility from './pages/public/Accessibility'
import NotFound from './pages/public/NotFound'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/portal/Dashboard'
import OperationsIndex from './pages/portal/OperationsIndex'
import BoardPage from './pages/portal/BoardPage'
import HrPage from './pages/portal/HrPage'
import PortalNotFound from './pages/portal/PortalNotFound'

function App() {
  return (
    <SessionProvider>
      <HashRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="divisions" element={<Divisions />} />
            <Route path="divisions/:slug" element={<DivisionDetail />} />
            <Route path="newsroom" element={<Newsroom />} />
            <Route path="newsroom/:slug" element={<PressReleaseDetail />} />
            <Route path="initiatives" element={<Initiatives />} />
            <Route path="careers" element={<Careers />} />
            <Route path="about" element={<About />} />
            <Route path="heritage" element={<Heritage />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="investors" element={<Investors />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="transparency" element={<Transparency />} />
            <Route path="explained" element={<Explained />} />
            <Route path="research" element={<Research />} />
            <Route path="research/:slug" element={<ResearchPaper />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="personnel" element={<LoginPage />} />

          <Route element={<RequireClearance />}>
            <Route path="portal" element={<InternalLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="operations" element={<OperationsIndex />} />
              <Route path="operations/:convention" element={<BoardPage />} />
              <Route path="hr" element={<HrPage />} />
              <Route path="*" element={<PortalNotFound />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </SessionProvider>
  )
}

export default App
