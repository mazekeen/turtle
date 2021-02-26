<?php

namespace App\Controller;

use App\Document\Activity;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ActivityController extends AbstractController
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
     * @Route("/activity", name="activity_list", methods={"GET"})
     */
    public function list(): Response {
        return $this->createResponse(
            $this->om->getRepository(Activity::class)->findAll(),
            'activity_list'
        );
    }

    /**
     * @Route("/activity/{id}", name="activity_find", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function find(Activity $activity): Response
    {
        return $this->createResponse(
            $activity,
            'activity_find'
        );
    }

    /**
     * @Route("/activity", name="activity_create", methods={"POST"})
     */
    public function create(Request $request): Response {
        $activity = $this->serializer->deserialize(
            $request->getContent(),
            Activity::class,
            'json'
        );

        $errors = $this->validator->validate($activity);
        if (count($errors) > 0) {
            return $this->createErrors($errors);
        }

        $this->om->persist($activity);
        $this->om->flush();

        return $this->createResponse(
            $activity,
            'activity_create'
        );
    }
}
