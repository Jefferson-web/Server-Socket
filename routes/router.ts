import { Request, Response, Router } from "express";

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.send('/mensajes works!!!');
});

router.post('/mensajes', (req: Request, res: Response) => {
    const { nombre, apellido } = req.body;
    res.status(200).json({
        ok: true,
        nombre,
        apellido
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    if (!Number(id))
        return res.status(400).json({
            ok: false,
            title: 'Bad Request',
            message: 'The id is not a number'
        });
    res.status(200).json({
        ok: true,
        id
    });
});

export default router;