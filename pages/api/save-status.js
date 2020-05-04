import { setStatus } from '../../model/markers';
import auth0 from '../../lib/auth0';

const saveStatus = async (request, response) => {
    const session = await auth0.getSession(request);
    if (session) {
        const dados = request.body
        await setStatus(session.user.sub, dados)
    }
    response.send({ ok: true })
}

export default saveStatus;