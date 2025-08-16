import { Router } from "express"
import { watchAPI } from "../controllers/watchController"
import { health } from "../controllers/healthController"

const router = Router();

router.get("/watch", watchAPI);
router.get("/watch-api", watchAPI); // change after chaging the garmin sdk
router.get('/health', health)

export default router;