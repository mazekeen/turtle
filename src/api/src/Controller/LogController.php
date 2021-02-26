<?php

namespace App\Controller;

use App\Document\Log;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class LogController extends AbstractController
{
    /**
     * @var ObjectManager
     */
    private $om;

    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @var ValidatorInterface
     */
    private $validator;

    public function __construct(
        ObjectManager $om,
        SerializerInterface $serializer,
        ValidatorInterface $validator
    ) {
        $this->om = $om;
        $this->serializer = $serializer;
        $this->validator = $validator;
    }

    /**
     * @Route("/log", name="log_list", methods={"GET"})
     */
    public function list(): Response {
        return $this->createResponse(
            $this->om->getRepository(Log::class)->findAll(),
            'log_list'
        );
    }

    /**
     * @Route("/log", name="log_create", methods={"POST"})
     */
    public function create(Request $request): Response {
        $log = $this->serializer->deserialize(
            $request->getContent(),
            Log::class,
            'json'
        );

        $errors = $this->validator->validate($log);
        if (count($errors) > 0) {
            return $this->createErrors($errors);
        }

        $this->om->persist($log);
        $this->om->flush();

        return $this->createResponse(
            $log,
            'log_create'
        );
    }
}
